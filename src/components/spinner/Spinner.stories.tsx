import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from "./Spinner";

// 1. Describe the component to Storybook
const meta = {
  title: "Atoms/Spinner",
  component: Spinner,
  argTypes: {
    size: {
      control: "select",
      options: ["lg", "sm"],
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    variant: "primary",
    size: "lg",
  },
};
