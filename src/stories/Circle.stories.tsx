import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Circle from './Circle';

const meta: Meta<typeof Circle> = {
  component: Circle,
  title: 'Example/Circle',
  argTypes: {
    variant: {
      control: "select",
      options: ['orange', 'green', 'yellow'],
    },
  },
  tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof meta>;


/**
 * オレンジ色の円 
 * */
export const BaseCircle: Story = {
  args: {
    variant: 'orange',
  },
};

/**
 * 緑色の円 
 * */
export const GreenCircle: Story = {
  args: {
    variant: 'green',
  },
};

/**
 * 黄色の円 
 * */
export const YellowCircle: Story = {
  args: {
    variant: 'yellow',
  },
};

/**
 * オレンジ色、緑色、黄色の円 
 * */
export const GrupedCircle: Story = {
  render: () => (
    <div className="flex gap-2">
      <Circle variant="orange" />
      <Circle variant="green" />
      <Circle variant="yellow" />
    </div>
  )
}