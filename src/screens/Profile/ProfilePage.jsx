import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { logoutHandler } from '../../utils/dbInteraction';
import style from './style';
import { Button, Text } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { withTheme } from 'react-native-elements';

const ProfilePage = ({ user, setUser, navigation, setIsLoggedIn, theme }) => {
  const { fullName, displayName, email } = user;
  const postNavigator = () => {
    navigation.navigate('ProfilePosts');
  };

  const { colors } = theme;

  return (
    <View style={style.container}>
      <LinearGradient
        colors={['#404040', '#181818']}
        style={style.background}
      />
      <Text>User: {fullName}</Text>
      <Text>Display Name: {displayName}</Text>
      <Text>Email: {email}</Text>

      <Button
        style={ style.button}
        mode="contained"
        onPress={() => {
          logoutHandler(setUser, setIsLoggedIn);
        }}
      >
        Logout
      </Button>
      <Button style={ style.button} mode="contained" onPress={postNavigator}>
        Posts
      </Button>
    </View>
  );
};

export default withTheme(ProfilePage);
