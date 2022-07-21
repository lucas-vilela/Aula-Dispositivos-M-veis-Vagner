import React from 'react';
import {Container, Text} from './styles';
import {StatusBar} from 'react-native';

const Course = () => {
  return (
    <Container>
      <Text>Screen Course</Text>
      <StatusBar backgroundColor="#fed32c" barStyle="dark-content" />
    </Container>
  );
};

export default Course;
