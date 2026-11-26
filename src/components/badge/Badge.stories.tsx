import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";

// 1. Describe the component to Storybook
const meta = {
  title: "Atoms/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: "select",
      options: ["nuetral", "primary", "success", "warning", "danger"],
    },
    size: {
      control: "select",
      options: ["sm", "md"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: "Save",
    variant: "neutral",
    size: "md",
  },
};
