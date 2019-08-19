import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import StartGameScreen from './StartGamesScreen';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is over!!!</TitleText>

      <Image
        fadeDuration={1000}
        source={require('../assets/images/success.png')}
        /*  source={require({
          uri: 'https://pixabay.com/go/?t=image-list-shutterstock&id=634991003'
        })} */
        resizeMode='center'
        style={styles.images}
      />

      <BodyText>No of rounds:{props.rounds}</BodyText>
      <BodyText>User Number:{props.userNumber}</BodyText>
      <Button title='New Game' onPress={props.startNewGame} />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    borderRadius: 200,
    borderWidth: 3,
    borderColor: 'black'
  },
  images: {
    width: '80%',
    height: 300
  }
});

export default GameOverScreen;
