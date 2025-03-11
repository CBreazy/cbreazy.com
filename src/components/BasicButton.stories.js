// BasicButton.stories.js
import React from 'react';
import BasicButton from './BasicButton';

const storyConfig = {
  title: 'Components/BasicButton',
  component: BasicButton,
};

const Template = (args) => <BasicButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'PRIMARY',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'SECONDARY',
  variant: 'secondary',
};

export const Third = Template.bind({});
Third.args = {
  children: 'THE THIRD',
  variant: 'third',
};

export const DisabledPrimary = Template.bind({});
DisabledPrimary.args = {
  children: 'PRIMARY',
  variant: 'primary',
  disabled: true,
};

export default storyConfig;