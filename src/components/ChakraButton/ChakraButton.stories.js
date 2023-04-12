import React from "react";
import { Button } from "@chakra-ui/react";
import { action, actions } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";
export default {
  title: "form/ChakraUI/ChakraButton",
  component: Button,
  argsTypes: {
    children: { control: "text" },
    colorScheme: { control: "text" },
    onClick: { actions: "clicked" },
  },
};

const Template = (args) => <Button {...args}></Button>;

// export const Success = () => <Button colorScheme="green">Success</Button>;
export const Log = () => (
  <Button onClick={() => console.log("Button Clicked")} colorScheme="blue">
    LOG
  </Button>
);
export const Knobs = () => (
  <Button disabled ={boolean('disabled',false)} colorScheme="purple">
    {text("Label","Button Label")}
  </Button>
);

export const Success = Template.bind({});
export const Danger = Template.bind({});

Success.args = {
  colorScheme: "green",
  children: "Success",
};
Danger.args = {
  colorScheme: "red",
  children: "Danger",
};

