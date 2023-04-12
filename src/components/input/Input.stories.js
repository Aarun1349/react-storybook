import React from "react";
import MyInput from "./MyInput";

export default {
  title: "form/Input",
  component: MyInput,
};

export const Small = () => (
  <MyInput variant="small" placeholder="Enter your name"></MyInput>
);
export const Medium = () => (
  <MyInput variant="medium" type="password" placeholder="Password"></MyInput>
);
export const Large = () => (
  <MyInput variant="large" type="number" placeholder="4692199474"></MyInput>
);


Small.storyName = "Small Input";