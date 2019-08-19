import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import StartGameScreen from './StartGamesScreen';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Game is over!!!</Text>
      <Text>No of rounds:{props.rounds}</Text>
      <Text>User Number:{props.userNumber}</Text>
      <Button title='New Game' onPress={props.startNewGame} />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default GameOverScreen;
