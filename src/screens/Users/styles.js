import styled from 'styled-components/native';
import {COLORS} from '../../assets/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.primaryDark};
`;

export const FlatList = styled.FlatList`
  margin-top: 20px;
  width: 95%;
  height: 100%;
`;
