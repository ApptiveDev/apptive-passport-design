import type { Meta, StoryObj } from '@storybook/react';
import Tag from '@components/tag/index';
import icon from '@assets/icons/tag.svg';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    children: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: 'label',
    icon,
  },
};
