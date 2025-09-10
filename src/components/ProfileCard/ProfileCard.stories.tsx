import type { Meta, StoryObj } from '@storybook/react-vite'
import ProfileCard from './ProfileCard'

const meta: Meta<typeof ProfileCard> = {
  title: 'Components/ProfileCard',
  component: ProfileCard,
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    imageUrl: '/assets/user-profile.avif',
    username: 'Johnny Rogers',
    userId: 'jonnyrogers',
    description:
      'Crafting brand and communication strategies, creating visual designs, leading art direction, and capturing portraits through photography.',
    socialLinks: {
      dribbble: 'https://dribbble.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      x: 'https://x.com',
      whatsapp: 'https://www.whatsapp.com',
    },
  },
}
