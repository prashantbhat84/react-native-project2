import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import StartGameScreen from './StartGamesScreen';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/Colors';

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
      <View style={styles.textContainer}>
        <BodyText style={styles.resultext}>
          Your Phone required
          <Text style={styles.highlight}>{props.rounds}</Text> rounds to guess
          <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>
      </View>

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
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold'
  },
  textContainer: {
    marginHorizontal: 70,
    marginVertical: 30
  },
  resultext: {
    textAlign: 'center',
    fontSize: 20
  }
});

export default GameOverScreen;
