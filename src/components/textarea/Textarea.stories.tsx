import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./Textarea";

// 1. Describe the component to Storybook
const meta = {
  title: "Atoms/Textarea",
  component: Textarea,
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    variant: "default",
    size: "md",
    placeholder: "Enter name",
  },
};
