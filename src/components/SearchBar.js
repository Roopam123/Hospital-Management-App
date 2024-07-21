import { View, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

const SearchBar = ({ setSearchText }) => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <View style={styles.searchBar}>
      <FontAwesome
        name="search"
        size={24}
        color="blue"
        style={styles.searchIcon}
      />
      <TextInput
        placeholder="search a doctor"
        style={styles.textInput}
        onChangeText={(text) => setSearchInput(text)}
        onSubmitEditing={() => setSearchText(searchInput)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    borderWidth: 1,
    marginHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 10,
    marginTop: 15,
    height: 50,
    alignItems: "center",
    borderRadius: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  textInput: {
    fontSize: 22,
    width: 300,
  },
});

export default SearchBar;
