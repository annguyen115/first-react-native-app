import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { id: "1", name: "Friend #1", age: "20" },
    { id: "2", name: "Friend #2", age: "21" },
    { id: "3", name: "Friend #3", age: "22" },
    { id: "4", name: "Friend #4", age: "23" },
    { id: "5", name: "Friend #5", age: "24" },
    { id: "6", name: "Friend #6", age: "25" },
    { id: "7", name: "Friend #7", age: "26" },
    { id: "8", name: "Friend #8", age: "27" },
    { id: "9", name: "Friend #9", age: "28" },
  ];

  return (
    <View>
      <FlatList
        keyExtractor={(friend) => friend.id}
        data={friends}
        renderItem={(element) => {
          const { item } = element;
          return (
            <Text style={styles.textStyle}>
              {item.name} - Age: {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
