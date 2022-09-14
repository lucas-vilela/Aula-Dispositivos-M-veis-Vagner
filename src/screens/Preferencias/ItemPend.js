import React from 'react';
import styled from 'styled-components/native';
import {Image} from 'react-native';
import {COLORS} from '../../assets/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import VerQuadrasButton from '../../components/VerQuadrasButton';

const Button = styled.TouchableOpacity`
  background-color: transparent;
  border-radius: 8px;
  margin: 10px 0px;
  flex-direction: row;
  border: 1px solid ${COLORS.alert};
`;

const DivTexto = styled.View`
  flex: 3;
  margin: 10px 0 5px 10px;
  flex-direction: column;
  justify-content: space-between;
`;

const DivTopTexto = styled.View`
  flex: 1;
  align-self: flex-start;
`;

const DivMidTexto = styled.View`
  flex: 3;
  margin: 20px 0;
`;

const DivDownTexto = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
`;

const DivEndereco = styled.View`
  flex: 1;
  position: absolute;
  right: 5px;
  bottom: 5px;
  flex-direction: row;
  align-items: flex-end;
`;

const DivIcon = styled.View`
  flex: 1;
`;

const DivImagem = styled.View`
  /* align-self: flex-end; */
  flex: 2;
  height: 100px;
  border-top-right-radius: 7px;
`;

const TextName = styled.Text`
  font-size: 24px;
  font-family: 'Ubuntu-Regular';
  color: ${COLORS.white};
`;

const TextMidData = styled.Text`
  font-size: 16px;
  font-family: 'Ubuntu-Bold';
  color: ${COLORS.white};
`;
const TextMidHorario = styled.Text`
  flex-direction: row;
  font-size: 16px;
  font-family: 'Ubuntu-Bold';
  color: ${COLORS.white};
`;

const TextGinasioNome = styled.Text`
  font-size: 14px;
  font-family: 'Ubuntu-Bold';
  color: ${COLORS.white};
`;
const TextEndereco = styled.Text`
  flex: 12;
  font-size: 14px;
  font-family: 'Ubuntu-Regular';
  color: ${COLORS.white};
`;

const Imagem = styled.Image`
  width: 100%;
  height: 100%;
  border-top-right-radius: 7px;
  margin-right: 10px;
`;

const Users = ({item, onPress}) => {
  return (
    <Button onPress={onPress} underlayColor="transparent">
      <>
        <DivTexto>
          <DivTopTexto>
            <TextGinasioNome>{item.ginasio}</TextGinasioNome>
            {/* <TextName>{item.nome}</TextName> */}
          </DivTopTexto>
          <DivMidTexto>
            <TextMidData>{item.data}</TextMidData>
            <TextMidHorario>
              {item.horario_inicio} - {item.horario_fim}
            </TextMidHorario>
            <TextMidData>R$ {item.preco},00</TextMidData>
          </DivMidTexto>
          <DivDownTexto>
            <TextMidData>
              {item.quadra} - {item.modalidade}
            </TextMidData>
          </DivDownTexto>
        </DivTexto>
        <DivEndereco>
          <TextEndereco>{item.endereco}</TextEndereco>
          <DivIcon>
            <Icon name="location-outline" size={16} color="#FFF" />
          </DivIcon> 
        </DivEndereco>
        <DivImagem>
          <Imagem source={require('../../assets/images/gin.jpg')} />
        </DivImagem>
      </>
    </Button>
  );
};

export default Users;