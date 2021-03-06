import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import { Button } from 'react-native-elements';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';

const StartGamesScreen = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const [buttonWidth, setButtonWidth] = useState(
    Dimensions.get('window').width / 5
  );

  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get('window').width / 5);
    };
    Dimensions.addEventListener('change', updateLayout);
    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  });

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };
  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };
  const confirmInputHandler = () => {
    const choosedNumber = parseInt(enteredValue);
    if (isNaN(choosedNumber) || choosedNumber <= 0 || choosedNumber > 99) {
      Alert.alert('Invalid Number', 'Number has to be from 1-99', [
        { text: 'Okay', style: 'cancel', onPress: resetInputHandler }
      ]);
      return;
    }
    setConfirmed(true);
    setEnteredValue('');
    setSelectedNumber(choosedNumber);
    Keyboard.dismiss();
  };
  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <View style={styles.summaryContainer}>
        <Card>
          <Text>You Selected</Text>
          <NumberContainer>{selectedNumber}</NumberContainer>
          <MainButton onPress={() => props.onStartGame(selectedNumber)}>
            START GAME
          </MainButton>
        </Card>
      </View>
    );
  }
  return (
    <ScrollView>
      <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styles.screen}>
            <TitleText>Start A New Game</TitleText>
            <Card style={styles.inputContainer}>
              <BodyText>Enter A Number</BodyText>
              <Input
                style={styles.input}
                blurOnSubmit
                keyboardType='number-pad'
                maxLength={2}
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredValue}
              />
              <View style={styles.buttonContainer}>
                <View style={{ width: buttonWidth }}>
                  <Button title='Reset' onPress={resetInputHandler} />
                </View>
                <View style={{ width: buttonWidth }}>
                  <Button title='Submit' onPress={confirmInputHandler} />
                </View>
              </View>
            </Card>
            {confirmedOutput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 3,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: 'open-sans-bold'
  },
  inputContainer: {
    width: '80%',
    minWidth: 300,
    maxWidth: '95%',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    paddingHorizontal: 5
  },
  /*  buttonSize: {
    width: Dimensions.get('window').width / 5
  }, */
  input: {
    width: 75,
    textAlign: 'center'
  },
  summaryContainer: {
    marginTop: 10,
    alignItems: 'center'
  }
});

export default StartGamesScreen;
