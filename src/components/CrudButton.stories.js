// CrudButton.stories.js
import React from 'react';
import CrudButton from './CrudButton';

const storyConfig = {
  title: 'Components/CrudButton',
  component: CrudButton,
  argTypes: { // Define argTypes for Controls
    disabled: {
        control: 'boolean',
        description: 'Sets the button to a disabled state.',
      },
  },
};

export default storyConfig;

const Template = (args) => <CrudButton {...args} />;

export const Save = Template.bind({});
Save.args = {
  children: 'Save',
  variant: 'save',
};

export const Delete = Template.bind({});
Delete.args = {
  children: 'Delete',
  variant: 'delete',
};

export const Cancel = Template.bind({});
Cancel.args = {
  children: 'Cancel',
};

export const Edit = Template.bind({});
Edit.args = {
  children: 'Edit',
};