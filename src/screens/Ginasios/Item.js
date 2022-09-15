import React from 'react';
import styled from 'styled-components/native';
import {Image} from 'react-native';
import {COLORS} from '../../assets/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import VerQuadrasButton from '../../components/VerQuadrasButton';

const Button = styled.TouchableHighlight`
  background-color: transparent;
  border-radius: 8px;
  margin: 10px 0px;
  flex-direction: row;
  border: 1px solid ${COLORS.primaryLight};
`;

const DivTexto = styled.View`
  flex: 3;
  margin: 10px 0 10px 10px;
  flex-direction: column;
  justify-content: space-between;
`;

const DivTopTexto = styled.View`
  flex: 3;
  align-self: flex-start;
`;

const DivDownTexto = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
`;

const DivIcon = styled.View`
  flex: 1;
  color: yellow;
`;

const DivImagem = styled.View`
  background-color: aliceblue;
  align-self: flex-end;
  flex: 2;
  height: 100%;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
`;

const TextName = styled.Text`
  font-size: 24px;
  font-family: 'Ubuntu-Regular';
  color: ${COLORS.white};
`;

const TextDistancia = styled.Text`
  font-size: 14px;
  font-family: 'Ubuntu-Bold';
  color: ${COLORS.alert};
`;
const TextEndereco = styled.Text`
  flex: 12;
  font-size: 14px;
  font-family: 'Ubuntu-Regular';
  color: ${COLORS.white};
`;

const Imagem = styled.Image`
  width: 100%;
  height: 130px;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  margin-right: 10px;
`;


const Users = ({item, onPress}) => {
  return (
    <Button onPress={onPress} underlayColor="transparent">
      <>
        <DivTexto>
          <DivTopTexto>
            <TextDistancia>{item.distancia}</TextDistancia>
            <TextName>{item.nome}</TextName>
          </DivTopTexto>
          <VerQuadrasButton texto={'Ver quadras'} onPress={onPress}/>
          <DivDownTexto>
            <DivIcon>
              <Icon name="location-outline" size={16} color='#FFF'/>
            </DivIcon>
            <TextEndereco>{item.endereco}</TextEndereco>
          </DivDownTexto>
        </DivTexto>
        <DivImagem>
          <Imagem source={require('../../assets/images/gin.jpg')} />
        </DivImagem>
      </>
    </Button>
  );
};

export default Users;
