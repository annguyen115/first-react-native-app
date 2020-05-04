import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Text>This is Counter Screen</Text>
      <Button
        title="Increase"
        onPress={() => {
          let count = counter + 1;
          setCounter(count);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          let count = counter - 1;
          setCounter(count);
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default CounterScreen;
