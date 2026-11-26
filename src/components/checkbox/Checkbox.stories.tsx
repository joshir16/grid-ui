import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "./Checkbox";
import { Label } from "../label/Label";

// 1. Describe the component to Storybook
const meta = {
  title: "Atoms/Checkbox",
  component: Checkbox,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "soft"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Playground: Story = {
//   args: {
//     variant: "default",
//     size: "md",
//   },
// };

export const WithLabel: Story = {
  args: {
    variant: "default",
    size: "md",
  },
  render: (args) => (
    <div className="flex items-center gap-3 ">
      <Checkbox id="item" {...args} />
      <Label htmlFor="item">Item</Label>
    </div>
  ),
};
