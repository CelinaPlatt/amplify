import React, { useState } from "react";
import { Text, View } from "react-native";
import MapScreen from "./MapScreen";
import PostFeed from "../PostFeed/PostFeed";
import { useMap } from "../../Hooks/useMarkers";

import { createStackNavigator } from "@react-navigation/stack";
import SingleAd from "../SingleAd/SingleAd";

const Stack = createStackNavigator();

export default function HomeScreen({ navigation }) {
  const [currentAd, setCurrentAd] = useState({});
  const { ads, loading, lastLocation } = useMap();

  if (loading) {
    return (
      <View>
        <Text>Loading..</Text>
      </View>
    );
  }

  const navToAd = (ad) => {
    setCurrentAd(ad);
    navigation.navigate("SingleHomeAd");
  };

  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="Map">
        {(props) => (
          <MapScreen
            {...props}
            ads={ads}
            lastLocation={lastLocation}
            navToAd={navToAd}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="HomePosts">
        {(props) => (
          <PostFeed {...props} ads={ads} mainList={true} navToAd={navToAd} />
        )}
      </Stack.Screen>
      <Stack.Screen name="SingleHomeAd">
        {(props) => <SingleAd {...props} currentAd={currentAd} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
