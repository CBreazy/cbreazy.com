// components/SkillsPill.stories.js
import React from 'react';
import SkillPill from './SkillPill';

const skillPillStory = {
  title: 'Components/SkillPill',
  component: SkillPill,
  argTypes: {
    bgColor: { control: 'color' }, // Add control for bgColor
  },
};

export default skillPillStory;

const Template = (args) => <SkillPill {...args} />;

export const Default = Template.bind({});
Default.args = {
  skill: 'React',
  bgColor: 'bg-gray-200',
};

export const NextJs = Template.bind({});
NextJs.args = {
  skill: 'Next.js',
  bgColor: 'bg-blue-300',
};

export const TailwindCSS = Template.bind({});
TailwindCSS.args = {
  skill: 'Tailwind CSS',
  bgColor: 'bg-green-200',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  skill: 'Custom',
  bgColor: 'bg-purple-400',
};