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
    children: "Legacy Styled Section",
  },
};