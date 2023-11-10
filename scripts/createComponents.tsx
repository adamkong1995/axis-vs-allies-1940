const fs = require("fs-extra");
const path = require("path");

// Retrieve command-line arguments
const args = process.argv.slice(2);
console.log("args", args);
if (args.length === 0) {
  console.error("Please provide a file name as an argument.");
  process.exit(1);
}

// Extract the provided file name
const componentType = args[0];

if (!componentType.match(/^a$|^m$|^o$/)) {
  console.error("Please provide a or m or o as an argument.");
  process.exit(1);
}

let componentTypeName = "";
switch (componentType) {
  case "a":
    componentTypeName = "atoms";
    break;
  case "m":
    componentTypeName = "molecules";
    break;
  case "o":
    componentTypeName = "organisms";
    break;
}

const folderName = args[1];
const componentName = args[1];
const fileExtension = "tsx"; // You can customize the file extension here

// Define the directory where you want to create files
const targetDirectory = path.resolve(
  __dirname,
  `../components/${componentTypeName}`,
  folderName
);

// Create the target directory if it doesn't exist
fs.ensureDirSync(targetDirectory);

// Create the component file inside the folder
const ComponentFilePath = path.join(
  targetDirectory,
  `${componentName}.${fileExtension}`
);
fs.writeFileSync(
  ComponentFilePath,
  `
  import {I${componentName}} from "./Type";
  import styled from "styled-components";

const Styled${componentName} = styled.div<I${componentName}>\`\`;

const ${componentName} = ({children}: I${componentName}) => {
  return <Styled${componentName}>{children}</Styled${componentName}>;
}

export default ${componentName};
`.trim()
);

// Create the Type file inside the folder
const TypeFilePath = path.join(targetDirectory, `Type.${fileExtension}`);

fs.writeFileSync(
  TypeFilePath,
  `
export interface I${componentName} {
  children?: React.ReactNode;
}
`.trim()
);

// Create the story file inside the folder
const StoryFilePath = path.join(targetDirectory, `${componentName}.stories.ts`);
fs.writeFileSync(
  StoryFilePath,
  `
import type { Meta, StoryObj } from "@storybook/react";
import ${componentName} from "./${componentName}";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/${componentTypeName}/${componentName}",
  component: ${componentName},
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof ${componentName}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "test",
  },
};
`.trim()
);

// Create the index.ts file inside the folder

const IndexFilePath = path.join(targetDirectory, "index.ts");
fs.writeFileSync(
  IndexFilePath,
  `
import ${componentName} from "./${componentName}";
import { I${componentName} } from "./Type";
  
export default ${componentName};
export type { I${componentName} };
`.trim()
);
