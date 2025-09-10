import type { Meta, StoryObj } from '@storybook/react-vite'
import RateUs from './RateUs'

const meta: Meta<typeof RateUs> = {
  title: 'Components/RateUs',
  component: RateUs,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
