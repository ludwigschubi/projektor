import React from "react";
import { Text } from "react-native";

export const getWelcomeString = (name: string) => {
  return <Text style={{ color: "red" }}>Welcome {name} to our project</Text>;
};
