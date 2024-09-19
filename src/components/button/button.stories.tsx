import type { Meta, StoryObj } from '@storybook/react';
import Button from '@components/button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {

    theme: {
      control: 'radio',
      options: ['light', 'dark', 'light-outlined'],
    },
    children: {
      control: 'text',
      defaultValue: 'Button Text',
    },
    css: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    theme: 'light',
    children: 'Default Button',
  },
};

export const WithIcon: Story = {
  args: {
    theme: 'dark',
    children: 'Button with Icon',
  },
};

export const CustomStyled: Story = {
  args: {
    theme: 'light',
    children: 'Custom Styled Button',
    css: {
      backgroundColor: 'lightblue',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
    },
  },
};
