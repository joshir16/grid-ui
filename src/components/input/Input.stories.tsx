import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";

// 1. Describe the component to Storybook
const meta = {
  title: "Atoms/Input",
  component: Input,
  argTypes: {
    size: {
      control: "select",
      options: ["xl", "lg", "md"],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    variant: "default",
    size: "md",
    placeholder: "Enter name",
    type: "text",
  },
};
