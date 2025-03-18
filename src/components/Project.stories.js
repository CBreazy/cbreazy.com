// components/Project.stories.js
import React from 'react';
import Project from './Project';
import homeDesktop from '../../public/assets/images/projects/xenith.com/home_desktop.jpg';
import homeMobile from '../../public/assets/images/projects/xenith.com/home_mobile.jpg';

const projectStoryConfig = {
  title: 'Components/Project',
  component: Project,
};

export default projectStoryConfig;

const Template = (args) => <Project {...args} />;

export const XenithProject = Template.bind({});
XenithProject.args = {
  title: 'Xenith Project',
  screenshots: [homeDesktop, homeMobile],
  description:
    'A project showcasing the development of the Xenith website, highlighting key features and technologies used.',
};

export const NoScreenshots = Template.bind({});
NoScreenshots.args = {
  title: 'Project with No Screenshots',
  screenshots: [],
  description: 'A project with no screenshots to demonstrate the component\'s behavior.',
};

export const LongDescription = Template.bind({});
LongDescription.args = {
  title: 'Project with Long Description',
  screenshots: [homeDesktop],
  description:
    'This is a project with a very long description to test how the component handles large amounts of text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};