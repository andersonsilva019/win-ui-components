import type { Meta, StoryObj } from "@storybook/react-webpack5";

import { Input } from ".";

const meta = {
  title: "UI/Input",
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Type something...",
    disabled: false,
  },
  argTypes: {
    placeholder: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
  render: (args) => (
    <div style={{ width: "400px" }}>
      <Input placeholder="Type something..." {...args}/>
    </div>
  ),
};
