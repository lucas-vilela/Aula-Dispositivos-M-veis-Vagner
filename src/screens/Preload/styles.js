import styled from 'styled-components/native';
import {COLORS} from '../../assets/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.alert};
`;

export const Image = styled.Image`
  width: 104px;
  height: 153px;
`;
