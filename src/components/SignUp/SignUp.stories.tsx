import type { Meta, StoryObj } from '@storybook/react-vite'
import SignUp from './SignUp'

const meta: Meta<typeof SignUp> = {
  title: 'components/SignUp',
  component: SignUp,
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
