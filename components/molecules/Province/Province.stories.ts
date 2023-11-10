import type { Meta, StoryObj } from "@storybook/react";
import Province from "./Province";
import { Country } from "../../Types/Country";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/molecules/Province",
  component: Province,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Province>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EasternUS: Story = {
  args: {
    owner: Country.USA,
    ic: 20,
    name: "Eastern US",
    id: "10",
  },
};
