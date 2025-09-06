import type { Meta, StoryObj } from '@storybook/react-vite';
import ProfileCard from "../components/ProfileCard";

const meta: Meta<typeof ProfileCard> = {
  title: 'Components/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'centered',
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    imageUrl: '/assets/user-profile.jpg',
    username: 'Johnny Rogers',
    userId: 'jonnyrogers',
    description: 'Crafting brand and communication strategies, creating visual designs, leading art direction, and capturing portraits through photography.'
  },
}