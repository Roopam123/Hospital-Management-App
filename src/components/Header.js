import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.home}>
      <View style={styles.headeLeft}>
        <View style={styles.logo}>
          <FontAwesome name="hospital-o" size={24} color="white" />
        </View>
        <View>
          <Text style={styles.hello}>Hello,👋</Text>
          <Text style={styles.title}>Online Appointment</Text>
        </View>
      </View>
      <View style={styles.headeRight}>
        <Ionicons
          style={styles.notification}
          name="notifications-outline"
          size={35}
          color="gary"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  home: {
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    flexDirection: "row",
    marginTop: 40,
  },
  headeLeft: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 50,
    backgroundColor: "green",
    height: 50,
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  hello: {
    fontSize: 16,
    fontFamily: "font",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "bold",
  },
  notification: {
    position: "relative",
    top: 10,
  },
});

export default Header;
