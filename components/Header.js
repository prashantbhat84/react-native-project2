import React from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import Colors from '../constants/Colors';
import TitleText from '../components/TitleText';
const Header = props => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.title}>{props.title}</TitleText>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: Platform.OS === 'android' ? '#ccc' : 'white',
    borderBottomWidth: Platform.OS === 'android' ? 20 : 2
  },
  title: {
    color: Platform.OS === 'android' ? 'white' : 'purple'
  }
});

export default Header;
