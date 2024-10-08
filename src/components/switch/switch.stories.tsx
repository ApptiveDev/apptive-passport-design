import type { Meta, StoryObj } from '@storybook/react';
import { css } from '@emotion/react';
import { Switch } from '.';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    wrapperCss: { control: 'object' },
    circleCss: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {

  },
};

export const CustomStyled: Story = {
  args: {
    wrapperCss: (
      css`
        .switch-checked + & {
          background-color: #e8baba;
        }
      `
    ),
    defaultChecked: true,
  },
};
