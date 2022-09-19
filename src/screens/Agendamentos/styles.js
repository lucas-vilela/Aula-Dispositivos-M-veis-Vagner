import styled from 'styled-components/native';
import {COLORS} from '../../assets/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  align-content: flex-start;
  background-color: ${COLORS.primaryDark};
`;

export const Text = styled.Text`
  font-size: 24px;
  color: ${COLORS.white};
  font-family: 'Ubuntu-Bold';
`;

export const FlatList = styled.FlatList`
  width: 90%;
`;

export const DivTexto = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 10px;
  flex-direction: row;
`;

export const Icone = styled.Text`
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 5px;
`;

export const Texto = styled.Text`
  align-items: center;
  justify-content: center;
  align-self: center;
  color: ${COLORS.white};
  font-size: 24px;
  font-family: 'Ubuntu-Bold';
`;

export const DivTextoSection = styled.View`
  width: 90%;
  margin-top: 10px;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  flex-direction: row;
`;
export const TextoSection = styled.Text`
  align-items: flex-start;
  justify-content: flex-start;
  /* align-self: center; */
  color: ${COLORS.white};
  font-size: 20px;
  font-family: 'Ubuntu-Bold';
`;

export const IconeSection = styled.Text`
  justify-content: center;
  align-items: center;
  align-self: center;
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
  margin-top: 200px;
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
  height: 80px;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  margin-right: 10px;
`;
