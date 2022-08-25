import React from 'react';
import styled from 'styled-components/native';

import {COLORS} from '../assets/colors';

const Button = styled.TouchableOpacity`
  color: ${COLORS.white};
  border-width: 0px;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  position: absolute;
  bottom: 100px;
  right: 10px;
  background-color: ${COLORS.alert};
  border-radius: 100px;
`;

// import { Container } from './styles';

const AddFloatButton = ({onClick}) => {
  return <Button onPress={() => onClick()} />;
};

export default AddFloatButton;
