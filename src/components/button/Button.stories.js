import React from "react";
import Button from "./Button";
import Center from "../Center/Center";
import {action,actions} from"@storybook/addon-actions"
export default {
  title: "form/control/Button",
  component: Button,
  // args could be declared here
  args: {
    children: "Button",
  },
  decorators: [(story) => <Center>{story()}</Center>],
};

export const Primary = () => (
  <Button variant="primary" onClick={action('click me')} size="small">
    Primary Button
  </Button>
);
export const Secondary = () => (
  <Button variant="secondary" size="medium">
    Secondary Button
  </Button>
);
export const Success = () => (
  <Button variant="success" size="large">
    Success Button
  </Button>
);
export const Danger = () => <Button variant="danger">Danger Button</Button>;

const Template = (args) => (
  <Center>
    <Button {...args} />
  </Center>
);

export const PrimaryA = Template.bind({});
export const PrimaryB = Template.bind({});
export const PrimaryC = Template.bind({});
export const PrimaryD = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  children: "Primary Args",
};

PrimaryB.args = {
  variant: "secondary",
  children: "Secondary Args",
};

PrimaryC.args = {
  ...PrimaryA.args,
  children: "Primary Args Button",
};
PrimaryD.args = {
  variant: "danger",
};
