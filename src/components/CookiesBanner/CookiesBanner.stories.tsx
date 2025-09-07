import type { Meta, StoryObj } from "@storybook/react-vite";
import CookiesBanner from "./CookiesBanner";

const meta: Meta<typeof CookiesBanner> = {
  title: "Components/CookiesBanner",
  component: CookiesBanner,
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}