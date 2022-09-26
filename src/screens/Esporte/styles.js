import styled from 'styled-components/native';
import {COLORS} from '../../assets/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  //justify-content: center;
  padding-top: 20px;
  background-color: ${COLORS.primaryDark};
`;

export const TextInput = styled.TextInput`
  font-size: 20px;
  width: 80%;
  background-color: ${COLORS.primary};
  border-radius: 8px;
  padding: 10px;
  color: ${COLORS.white};
  margin-top: 5px;
`;
