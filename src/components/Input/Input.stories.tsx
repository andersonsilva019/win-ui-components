import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ArgTypes } from "@storybook/addon-docs/blocks";
import { EyeClosedIcon } from "@phosphor-icons/react";

import { Input } from ".";

const meta = {
  title: "UI/Input",
  component: Input,
  args: {
    placeholder: "Type something...",
    disabled: false,
  },
  argTypes: {
    placeholder: {
      control: "text",
      description: "Texto do placeholder do input",
    },
    disabled: {
      control: "boolean",
      description: "Desabilita o input",
    },
    errorMessage: {
      control: "text",
      description: "Mensagem de erro exibida abaixo do input",
    },
    icon: {
      control: false,
      description: "Ícone exibido no input (ReactNode)",
    },
    iconPosition: {
      control: "radio",
      options: ["left", "right"],
      description: "Posição do ícone (left ou right)",
    },
    onIconAction: {
      control: false,
      description: "Função chamada ao clicar no ícone",
    },
    className: {
      control: false,
      description: "Classes CSS adicionais",
    },
  },
  render: (args) => (
    <div style={{ width: "400px" }}>
      <Input placeholder="Type something..." {...args} />
    </div>
  ),
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    errorMessage: "",
  },
};

export const WithIcon: Story = {
  args: {
    icon: <EyeClosedIcon size={18} />,
    onIconAction: () => alert("Icon clicked"),
    errorMessage: "",
  },
  argTypes: {
    icon: { description: "ReactNode", control: "object" },
    placeholder: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    onIconAction: {
      control: false,
      description: "Function to be called when the icon is clicked",
    },
  },
};

export const WithLabel: Story = {
  args: {
    errorMessage: "",
    label: "Input Label",
  },
  argTypes: {
    label: { description: "Label text", control: "text"}
  },
};

