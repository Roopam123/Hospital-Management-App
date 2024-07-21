import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import Appointment from "../pages/Appointment";
import Profile from "../pages/Profile";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          paddingTop: 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Ionicons name="home" size={32} color="black" />,
          tabBarLabel: "Home",
          tabBarLabelStyle: {
            color: "black",
            fontSize: 20,
            fontWeight: "700",
          },
        }}
      />
      <Tab.Screen
        name="Appointment"
        component={Appointment}
        options={{
          tabBarIcon: () => (
            <Ionicons name="calendar" size={35} color="black" />
          ),
          tabBarLabel: "Appointment",
          tabBarLabelStyle: {
            fontSize: 20,
            color: "black",
            fontWeight: "700",
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="user-circle" size={35} color="black" />
          ),
          tabBarLabel: "Profile",
          tabBarLabelStyle: {
            fontSize: 20,
            color: "black",
            fontWeight: "700",
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
