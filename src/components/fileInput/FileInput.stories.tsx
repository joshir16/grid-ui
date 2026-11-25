import type { Meta, StoryObj } from "@storybook/react-vite";
import { FileInput } from "./FileInput";

// 1. Describe the component to Storybook
const meta = {
  title: "Atoms/FileInput",
  component: FileInput,
  argTypes: {
    size: {
      control: "select",
      options: ["xl", "lg", "md"],
    },
  },
} satisfies Meta<typeof FileInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    variant: "primary",
    size: "md",
    placeholder: "upload file",
  },
};
