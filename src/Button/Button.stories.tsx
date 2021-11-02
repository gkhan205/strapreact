import React from "react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes:{
    size: {options: ['small', 'medium', 'large'], control: {type: 'select'}},
    iconPlacement: {options: ['left', 'right'], control: {type: 'select'}},
    text: 'Test This Button',
    type: {options:['primary', 'secondary'], control: {type: 'select'}},
    onClick: {action: 'clicked'}
  }
};

const handleClick = () => {
  alert("Button clicked");
};

 const Template = (args) => <Button {...args} />;

 export const Basic = Template.bind({});
 Basic.args = {
   text: 'Test Button',
   type: 'secondary',
   size: 'medium',
   iconPlacement: 'left',
   icon: null,
 }
 