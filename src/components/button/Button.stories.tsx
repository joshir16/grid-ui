import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

// 1. Describe the component to Storybook
const meta = {
  title: "Atoms/Button",
  component: Button,
  // This automatically generates controls so you can click to change variants in the UI
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "destructive", "outline", "ghost"],
    },
    size: {
      control: "select",
      options: ["xl", "lg", "md", "icon"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// 2. Create your first visual test case (The Default Button)
export const Playground: Story = {
  args: {
    children: "Save",
    variant: "primary",
    size: "md",
  },
};

export const AsLink: Story = {
  args: {
    asChild: true,
    variant: "outline",
    size: "md",
    children: (
      <a href="https://example.com" target="_blank" rel="noreferrer">
        Open Link
      </a>
    ),
  },
};
