import styled from 'styled-components/native';
import {COLORS} from '../../assets/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  background-color: ${COLORS.primaryDark};
`;

export const Text = styled.Text`
  font-size: 24px;
  color: ${COLORS.danger};
  font-family: 'Ubuntu-Bold';
`;

export const FlatList = styled.FlatList`
  margin-top: 20px;
  width: 95%;
  height: 100%;
`;