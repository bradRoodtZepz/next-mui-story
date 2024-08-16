import { Meta, StoryObj } from '@storybook/react';
import SomeLegacyStyledSection from './some-legacy-styled-section.component';

const meta: Meta<typeof SomeLegacyStyledSection> = {
  title: 'Components/SomeLegacyStyledSection',
  component: SomeLegacyStyledSection,  
  tags: ['autodocs'],
  
};

export default meta;

type Story = StoryObj<typeof SomeLegacyStyledSection>;

export const Default: Story = {
  args: {
    children: <><h1>Hello there</h1><button onClick={() => alert('clicked')}>Click</button></>,
  },
};