import React from 'react';
import {Container, Text} from './styles';
import {StatusBar} from 'react-native';

const Ginasio = () => {
  return (
    <Container>
      <Text>Screen Ginásio</Text>
      <StatusBar backgroundColor="#fed32c" barStyle="dark-content" />
    </Container>
  );
};

export default Ginasio;
