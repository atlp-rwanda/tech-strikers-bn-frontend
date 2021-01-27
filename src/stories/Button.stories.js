import React from 'react';

import { Button } from './Button';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Submit = Template.bind({});
Submit.args = {
  Submit: true,
  label: 'Submit',
};

export const Reset = Template.bind({});
Reset.args = {
  Reset:true,
  label: 'Reset',
};
