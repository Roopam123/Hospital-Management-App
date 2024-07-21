import { View, Text, FlatList, Image, Dimensions } from "react-native";
import React from "react";

const Slider = () => {
  const sliderList = [
    {
      id: 1,
      name: "slider 1",
      imageUrl: require("../../assets/Images/login-without-background.png"),
    },
    {
      id: 2,
      name: "slider 2",
      imageUrl: require("../../assets/Images/one.png"),
    },
    {
      id: 3,
      name: "slider 2",
      imageUrl: require("../../assets/Images/one.png"),
    },
    {
      id: 4,
      name: "slider 1",
      imageUrl: require("../../assets/Images/login-without-background.png"),
    },
  ];
  return (
    <View>
      <FlatList
        data={sliderList}
        horizontal={true}
        renderItem={({ item }) => (
          <Image
            source={item.imageUrl}
            style={{
              width: Dimensions.get("screen").width * 0.98,
              height: 170,
              objectFit: "contain",
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 10,
              margin: 5,
              backgroundColor: "rgb(184, 219, 192)",
            }}
          />
        )}
      />
    </View>
  );
};

export default Slider;
