import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <ScrollView style={styles.home}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.searchBar}>
        <SearchBar setSearchText={(value) => console.log("Home->", value)} />
      </View>
      <View style={styles.slider}>
        <Slider />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  home: {
    display: "flex",
  },
  slider: {
    marginTop: 10,
  },
});

export default Home;
