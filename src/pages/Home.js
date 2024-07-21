import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <ScrollView style={styles.home}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.searchBar}>
        <SearchBar setSearchText={(value) => console.log("Home->", value)} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  home: {
    display: "flex",
  },
});

export default Home;
