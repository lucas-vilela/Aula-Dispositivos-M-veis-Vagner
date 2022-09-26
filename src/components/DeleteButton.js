import React from 'react';
import {Text, StyleSheet, TouchableHighlight} from 'react-native';
import {COLORS} from '../assets/colors';
const MeuButton = props => {
  return (
    <TouchableHighlight style={styles.button} onPress={() => props.onClick()}>
      <Text style={styles.texto}>{props.texto}</Text>
    </TouchableHighlight>
  );
};
export default MeuButton;

const styles = StyleSheet.create({
  texto: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 20,
    color: COLORS.primaryDark,
  },
  button: {
    alignItems: 'center',
    backgroundColor: COLORS.danger,
    padding: 20,
    marginTop: 20,
    borderRadius: 35,
    width: '100%',
  },
});
