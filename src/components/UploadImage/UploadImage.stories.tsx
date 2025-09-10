import type { Meta, StoryObj } from "@storybook/react-vite";
import UploadImage from "./UploadImage";

const meta: Meta<typeof UploadImage> = {
  title: "components/UploadImage",
  component: UploadImage,
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
}
