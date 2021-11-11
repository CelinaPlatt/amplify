import React from 'react';
import { logoutHandler } from '../../utils/dbInteraction';
import style from './style';
import { Button, Text, Avatar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { withTheme } from 'react-native-elements';
import { View } from 'react-native';

const ProfilePage = ({ user, setUser, navigation, setIsLoggedIn }) => {
  const { displayName, city } = user;
  const postNavigator = () => {
    navigation.navigate("ProfilePosts");
  };
  const imgs = {
    CelinaAd: require('../../../assets/pexels-anna-tarazevich-8479248.jpg'),
    rebelJeff: require('../../../assets/pexels-amine-msiouri-2108813.jpg'),
    Brent123: require('../../../assets/pexels-rodolfo-quirós-1727280.jpg'),
    Brentley86: require ('../../../assets/pexels-cottonbro-6503569.jpg'),
    BrendanIam: require ('../../../assets/pexels-wendy-wei-1576280.jpg'),
    BrentwoodH:require ('../../../assets/pexels-jack-carey-3331904.jpg'),
    McLarry: require('../../../assets/pexels-rodolfo-quirós-1727280.jpg'),
    Ctrlholtdel: require('../../../assets/pexels-nichole-sebastian-3361381.jpg'),
    dave334: require('../../../assets/pexels-anne-mccarthy-6344364.jpg'),
    Emilyb93: require('../../../assets/pexels-cottonbro-6853299.jpg'),
    steveRaw: require('../../../assets/pexels-cottonbro-6503569.jpg'),
  };
  const imgSource = imgs[displayName];

  return (
    <View style={style.container}>
      <LinearGradient
        colors={["#252525", "#181818"]}
        style={style.background}
      />

      <View style={style.profilecard}>
        <LinearGradient
          style={style.profilegradient}
          colors={['#252525', '#181818']}
          style={style.background}
        />
        <Avatar.Image style={style.shadow} size={120} source={imgSource} />

        <View style={style.profiledetails}>
          <Text style={style.username}>{displayName}</Text>
          <Text style={style.city}> {city}</Text>

          <Button
            style={style.logoutbutton}
            mode="contained"
            onPress={() => {
              logoutHandler(setUser, setIsLoggedIn);
            }}
          >
            Logout
          </Button>
        </View>
      </View>
      <Button
        style={(style.button, style.shadow)}
        mode="contained"
        onPress={postNavigator}
      >
        Posts
      </Button>
    </View>
  );
};

export default withTheme(ProfilePage);
