// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { CheckFatIcon } from "@phosphor-icons/react";

import { Button } from ".";

const meta = {
  title: "IU/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonWithoutIcon: Story = {
  args: {
    children: "Button text",
    disabled: false,
    variant: "primary",
    size: "medium",
  },
  argTypes: {
    children: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export const ButtonWithIcon: Story = {
  args: {
    children: "Button text",
    disabled: false,
    variant: "primary",
    size: "medium",
    icon: <CheckFatIcon size={18} weight="fill" />,
    iconPosition: "left",
  },
  argTypes: {
    children: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
};
