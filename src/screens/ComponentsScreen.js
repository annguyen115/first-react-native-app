import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ComponentsScreen = () => {
  const name = "An Nguyen";

  return (
    <View>
      <Text style={style.textStyle}>Greeting started with React Native!</Text>
      <Text style={style.subHeaderStyle}>My name is {name}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 30,
  },
});

export default ComponentsScreen;
