import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { logoutHandler } from '../../utils/dbInteraction';
import style from './style';
import { Button, Text ,Avatar} from 'react-native-paper';
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
        colors={['#252525', '#181818']}
        style={style.background}
      />

<Avatar.Image size={100} source={require('../../../assets/pexels-cottonbro-6503569.jpg')} />
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
