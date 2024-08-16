import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import MainH1 from './main-h1.component';

// Meta configuration for the MainH1 component
const meta: Meta<typeof MainH1> = {
  title: 'Components/MainH1',
  component: MainH1,
  parameters: {    
    layout: 'centered',
  },
  argTypes: {
    title: { control: 'text' },
  },
  tags: ['autodocs'],
};

export default meta;

// Story definition
type Story = StoryObj<typeof MainH1>;

export const Default: Story = {
  args: {
    title: 'Hello World',
  },
};