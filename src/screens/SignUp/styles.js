import styled from 'styled-components/native';
import {COLORS} from '../../assets/colors';

export const Body = styled.View`
  flex: 1;
  background-color: ${COLORS.primaryDark};
  align-items: center;
  padding: 40px;
`;

export const TextInput = styled.TextInput`
  width: 100%;
  height: 40px;
  background-color: ${COLORS.primary};
  border-radius: 8px;
  padding: 10px;
  color: ${COLORS.white};
`;

export const Text = styled.Text`
  font-family: 'Ubuntu-Regular';
  font-size: 20px;
  align-self: flex-start;
  color: ${COLORS.white};
  margin-left: 20px;
  margin-bottom: 10px;
  margin-top: 30px;
`;
