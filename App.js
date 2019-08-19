import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGamesScreen from './screens/StartGamesScreen';
import GamesScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
  };
  let content = <StartGamesScreen onStartGame={startGameHandler} />;
  if (userNumber) {
    content = <GamesScreen userChoice={userNumber} />;
  }
  return (
    <View style={styles.screen}>
      <Header title='Guess A Number' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
