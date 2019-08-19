import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGamesScreen from './screens/StartGamesScreen';
import GamesScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
  };
  const gameOverHandler = rounds => {
    setGuessRounds(rounds);
  };
  const configureNewGame = () => {
    setGuessRounds(0);
    setUserNumber();
  };

  let content = <StartGamesScreen onStartGame={startGameHandler} />;
  if (userNumber && guessRounds <= 0) {
    content = (
      <GamesScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        rounds={guessRounds}
        userNumber={userNumber}
        startNewGame={configureNewGame}
      />
    );
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
