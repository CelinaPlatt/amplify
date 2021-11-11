import React, { useState } from "react";
import { View, Text } from "react-native";
import SingleChat from "../SingleChat/SingleChat";
import Chats from "../Chats/Chats";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Constants } from "expo";
import { Platform } from "expo-modules-core";
import { StatusBar } from "react-native";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

export default function InboxScreen({
  chatArray,
  usersArray,
  user,
  messagesObject,
}) {
  const Stack = createStackNavigator();

  return (
    <View
      style={{
        flex: 1,
        headerStyle: { backgroundColor: "pink" },
      }}
    >
      <Stack.Navigator initialRouteName="Chats">
        <Stack.Screen
          name="Chats"
          options={{
            headerStyle: { backgroundColor: "#363636" },
            headerTitleStyle: { color: "#FEF4EC" },
          }}
        >
          {(props) => (
            <Chats
              {...props}
              chatArray={chatArray}
              usersArray={usersArray}
              currUser={user}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="SingleChat"
          options={{
            title: "Chat",
            headerStyle: { backgroundColor: "#363636" },
            headerTitleStyle: { color: "#FEF4EC" },
            headerTintColor:'#FEF4EC',
          }}
        >
          {(props) => <SingleChat {...props} messagesObject={messagesObject} />}
        </Stack.Screen>
      </Stack.Navigator>
    </View>
  );
}
