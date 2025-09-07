import type { Meta, StoryObj } from "@storybook/react-vite";
import ImageCarousel from "./ImageCarousel";

const meta: Meta<typeof ImageCarousel> = {
  title: "Components/ImageCarousel",
  component: ImageCarousel,
}

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {};