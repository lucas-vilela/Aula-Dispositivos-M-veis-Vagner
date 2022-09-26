import React from 'react';
import styled from 'styled-components/native';
import {COLORS} from '../../assets/colors';

const Button = styled.TouchableHighlight`
  background-color: ${COLORS.alert};
  padding: 20px;
  margin-top: 10px;
  border-radius: 8px;
`;

const TextName = styled.Text`
  font-size: 24px;
  font-family: 'Ubuntu-Regular';
  color: ${COLORS.primaryDark};
`;

const TextEmail = styled.Text`
  font-size: 16px;
  font-family: 'Ubuntu-Regular';
  color: ${COLORS.primaryDark};
`;

const Users = ({item, onPress}) => {
  return (
    <Button onPress={onPress} underlayColor="transparent">
      <>
        <TextName>{item.nome}</TextName>
        <TextEmail>{item.cel}</TextEmail>
        <TextEmail>{item.email}</TextEmail>
      </>
    </Button>
  );
};

export default Users;
