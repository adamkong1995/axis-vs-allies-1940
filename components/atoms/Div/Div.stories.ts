import type { Meta, StoryObj } from "@storybook/react";
import Div from "./Div";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/atoms/Div",
  component: Div,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Div>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "test",
  },
};

export const BorderColor: Story = {
  args: {
    children: "test",
    border: "1px solid red",
  },
};

export const Padding: Story = {
  args: {
    children: "test",
    border: "1px solid red",
    padding: "5px 10px",
  },
};

export const Margin: Story = {
  args: {
    children: "test",
    border: "1px solid red",
    margin: "5px 10px",
  },
};
