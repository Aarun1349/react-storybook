import React from "react";
import Button from "./Button";

export default {
  title: "My Button",
  component: Button,
};

export const Primary = () => <Button variant ="primary" size="small">
    Primary Button
</Button> 
export const Secondary = () => <Button variant ="secondary" size="medium">
    Secondary Button
</Button> 
export const Success = () => <Button variant ="success" size="large">
    Success Button
</Button> 
export const Danger = () => <Button variant ="danger">
    Danger Button
</Button> 