import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

import {COLORS} from '../assets/colors';

const Button = styled.TouchableOpacity`
  color: ${COLORS.white};
  border-width: 0px;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  position: absolute;
  bottom: 40px;
  right: 15px;
  background-color: ${COLORS.primary};
  border-radius: 100px;
`;

// import { Container } from './styles';

const AddFloatButton = ({onClick}) => {
  return (
    <Button onPress={() => onClick()}>
      <Icon name="add" size={30} color={COLORS.alert} />
    </Button>
  );
};

export default AddFloatButton;
