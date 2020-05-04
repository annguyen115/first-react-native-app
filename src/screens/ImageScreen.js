import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  const images = [
    { id: "1", title: "forest", src: require("../../assets/forest.jpg"), score: 7 },
    { id: "2", title: "beach", src: require("../../assets/beach.jpg"), score: 9 },
    { id: "3", title: "mountain", src: require("../../assets/mountain.jpg"), score: 8 },
  ];

  return (
    <View>
      <FlatList
        keyExtractor={(image) => image.id}
        data={images}
        renderItem={(element) => {
          const { item } = element;
          return <ImageDetail title={item.title} imageSource={item.src} score={item.score} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
