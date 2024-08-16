// StyledH1.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import StyledH1 from '../components/styled-h1.component';

// This default export determines where your story goes in the story list
const meta: Meta<typeof StyledH1> = {
  title: 'Component/Button',
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  component: StyledH1,
  };
   
  export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
  },
};