import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '../assets/colors';
const VerQuadrasButton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => props.onPress()}>
      <Text style={styles.texto}>{props.texto}</Text>
    </TouchableOpacity>
  );
};
export default VerQuadrasButton;

const styles = StyleSheet.create({
  texto: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 16,
    marginBottom: 2,
    color: COLORS.primaryDark,
  },
  button: { 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.alert,
    paddingHorizontal: 7,
    borderRadius: 100,
    width: 120,
  },
});
