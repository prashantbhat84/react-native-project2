import React from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import Colors from '../constants/Colors';
import TitleText from '../components/TitleText';
const Header = props => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.HeaderIOS,
          android: styles.HeaderAndroid
        })
      }}
    >
      <TitleText style={styles.title}>{props.title}</TitleText>
    </View>
  );
};
const styles = StyleSheet.create({
  headerBase: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  HeaderIOS: {
    borderBottomColor: 'white',
    borderBottomWidth: 2
  },
  HeaderAndroid: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 20
  },
  title: {
    color: Platform.OS === 'android' ? 'white' : 'purple'
  }
});

export default Header;
