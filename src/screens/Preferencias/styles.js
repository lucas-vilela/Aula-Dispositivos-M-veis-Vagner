import styled from 'styled-components/native';
import {COLORS} from '../../assets/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  //flex-direction: row;
  //align-items: flex-start;
  align-items: center;
  justify-content: flex-start;
  //padding-top: 20px;
  background-color: ${COLORS.primaryDark};
`;

export const DivTexto = styled.View`
  padding-top: 30px;
  width: 90%;
  align-items: center;
  align-content: center;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const Texto = styled.Text`
  align-self: center;
  color: ${COLORS.white};
  font-size: 24px;
  font-family: 'Ubuntu-Bold';
`;

export const DivTextoSection = styled.TouchableOpacity`
  /* border-color: ${COLORS.primary};
  border-top-width: 1px;
  border-bottom-width: 1px; */
  align-items: center;
  width: 90%;
  padding: 25px 0;
  flex-direction: row;
`;

export const IconeRight = styled.View`
  flex: 1;
  align-items: flex-end;
  width: 20px;
`;

export const IconeLeft = styled.View`
  flex: 2;
  align-items: flex-start;
  width: 20px;
`;

export const TextoSection = styled.Text`
  flex: 8;
  color: ${COLORS.white};
  align-self: flex-start;
  font-size: 24px;
  font-family: 'Ubuntu-Regular';
`;

export const IconeSection = styled.Text`
  flex: 1;
  margin-left: 5px;
`;

export const DivLinha = styled.Text`
  width: 90%;
  border-bottom-width: 1px;
  border-color: ${COLORS.primary};
  border-style: solid;
  height: 0;
`;

export const DivMsg = styled.View`
  margin-top: 100px;
  /* position: absolute; */
  width: 250px;
  align-items: center;
  justify-content: center;
`;

export const TextoMsgSup = styled.Text`
  align-self: center;
  text-align: center;
  color: ${COLORS.primaryLight};
  font-size: 20px;
  font-family: 'Ubuntu-Bold';
`;
export const TextoMsgInf = styled.Text`
  margin-top: 20px;
  align-self: center;
  text-align: center;
  color: ${COLORS.primaryLight};
  font-size: 20px;
  font-family: 'Ubuntu-Bold';
`;

export const DivLogo = styled.View`
  margin-top: 20px;
  align-self: center;
`;

export const Imagem = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 50px;
  margin-right: 10px;
`;
