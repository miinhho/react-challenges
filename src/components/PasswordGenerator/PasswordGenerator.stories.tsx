import type { Meta, StoryObj } from "@storybook/react-vite";
import PasswordGenerator from "./PasswordGenerator";

const meta: Meta<typeof PasswordGenerator> = {
  title: "Components/PasswordGenerator",
  component: PasswordGenerator,
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};