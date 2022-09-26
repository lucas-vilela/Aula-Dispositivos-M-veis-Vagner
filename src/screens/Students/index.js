import React from 'react';
import {Container, Text} from './styles';
import {StatusBar} from 'react-native';

const Students = () => {
  return (
    <Container>
      <Text>Screen Students</Text>
      <StatusBar backgroundColor="#fed32c" barStyle="dark-content" />
    </Container>
  );
};

export default Students;
