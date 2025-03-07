// src/components/Button.stories.js
import React from "react";
import Button from "./Button";

// Default export to define metadata for the Storybook
export default {
  title: "Components/Button",
  component: Button,
};

// Template for the button story
const Template = (args) => <Button {...args} />;

// Export different variations of the Button
export const Default = Template.bind({});
Default.args = {
  label: "Click Me",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
};
