import React from 'react';
import {Container, Text} from './styles';
import {StatusBar} from 'react-native';

const Student = () => {
  return (
    <Container>
      <Text>Screen Student</Text>
      <StatusBar backgroundColor="#fed32c" barStyle="dark-content" />
    </Container>
  );
};

export default Student;
