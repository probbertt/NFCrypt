import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ReadScreen from "./components/read_page";
import WriteScreen from "./components/write_page";
import CryptScreen from "./components/crypt_page";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons or any other icon set
import { AppRegistry } from "react-native";

const Tab = createBottomTabNavigator();
AppRegistry.registerComponent("NFCrypt", () => App);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Read"
          component={ReadScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="book-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Write"
          component={WriteScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="create-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Crypt"
          component={CryptScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="lock-closed-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
