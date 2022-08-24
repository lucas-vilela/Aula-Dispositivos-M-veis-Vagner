import React from 'react';
import {Container, Text} from './styles';
import {StatusBar} from 'react-native';

const Esporte = () => {
  return (
    <Container>
      <Text>Screen Esporte</Text>
      <StatusBar backgroundColor="#fed32c" barStyle="dark-content" />
    </Container>
  );
};

export default Esporte;