import React from 'react';
import styled from 'styled-components/native';
import {COLORS} from '../../assets/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const Button = styled.TouchableHighlight`
  border: 1px solid ${COLORS.primaryLight};
  margin: 30px 10px 80px 10px;
  border-radius: 8px;
  width: 200px;
  height: 60px;
  justify-content: center;
  flex-direction: row;
`;

const TextName = styled.Text`
  font-size: 24px;
  font-family: 'Ubuntu-Regular';
  color: ${COLORS.white};
`;

const DivLeft = styled.View`
  flex: 5;
  padding-left: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const DivRight = styled.View`
  flex: 3;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Esportes = ({item, onPress}) => {
  return (
    <Button onPress={onPress} underlayColor="transparent">
      <>
        <DivLeft>
          <TextName>{item.modalidade}</TextName>
        </DivLeft>
        <DivRight>
          <Icon name="football-outline" size={55} color="#fed32c" />
        </DivRight>
      </>
    </Button>
  );
};

export default Esportes;
