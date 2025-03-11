// IconButton.stories.js
import React from 'react';
import IconButton from './IconButton';

const storyConfig = {
  title: 'Components/IconButton',
  component: IconButton,
};

export default storyConfig;

const Template = (args) => <IconButton {...args} />;

export const AddAddress = Template.bind({});
AddAddress.args = {
  children: 'Add Address',
};

export const AddShippingAccount = Template.bind({});
AddShippingAccount.args = {
  children: 'Add Shipping Account',
};