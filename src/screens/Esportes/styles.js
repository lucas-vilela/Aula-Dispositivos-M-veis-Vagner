import styled from 'styled-components/native';
import {COLORS} from '../../assets/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  /* padding-top: 20px; */
  background-color: ${COLORS.white};
`;

export const FlatList = styled.FlatList`
  margin-top: 0px;
`;
