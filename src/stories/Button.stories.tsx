import React from "react";
import { Story, Meta } from "@storybook/react";

import Button, { ButtonProps } from "../components/Button/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {},
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  text: "Hello",
  variant: "contained",
  onClick: () => console.log("hello"),
};

export const Outlined = Template.bind({});
Outlined.args = {
  text: "Hello",
  variant: "outlined",
  onClick: () => console.log("hello"),
};

export const Text = Template.bind({});
Text.args = {
  text: "Hello",
  variant: "text",
  onClick: () => console.log("hello"),
};
