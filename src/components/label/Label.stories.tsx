import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "./Label";
import { Input } from "../input/Input";

// 1. Describe the component to Storybook
const meta = {
  title: "Atoms/Label",
  component: Label,
  args: {
    children: "Cabin name",
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithInput: Story = {
  render: (args) => (
    <div className="flex items-center gap-3 ">
      <Label htmlFor="cabin-name" {...args} />
      <Input id="cabin-name" placeholder="001 - Pine Loft" />
    </div>
  ),
};
