// BasicButton.stories.js
import React from 'react';
import BasicButton from './BasicButton';

const storyConfig = {
  title: 'Components/BasicButton',
  component: BasicButton,
  argTypes: { // Define argTypes for Controls
    disabled: {
        control: 'boolean',
        description: 'Sets the button to a disabled state.',
      },
  },
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

export default storyConfig;