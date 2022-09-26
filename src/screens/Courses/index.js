import React from 'react';
import {Container, Text} from './styles';
import {StatusBar} from 'react-native';

const Courses = () => {
  return (
    <Container>
      <Text>Screen Courses</Text>
      <StatusBar backgroundColor="#fed32c" barStyle="dark-content" />
    </Container>
  );
};

export default Courses;
