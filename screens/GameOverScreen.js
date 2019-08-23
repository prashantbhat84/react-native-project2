import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';
import StartGameScreen from './StartGamesScreen';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/Colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
  return (
    <ScrollView>
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

        <MainButton onPress={props.startNewGame}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: (Dimensions.get('window').width * 0.7) / 2,
    borderWidth: 3,
    borderColor: 'black',
    marginVertical: Dimensions.get('window').height / 30
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
    marginVertical: Dimensions.get('window').height / 60
  },
  resultext: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').height < 250 ? 16 : 20
  }
});

export default GameOverScreen;
