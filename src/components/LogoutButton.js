import React from 'react';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import RNRestart from 'react-native-restart';

const ButtonExit = styled.TouchableHighlight`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

const Image = styled.Image`
  width: 30px;
  height: 30px;
`;

const LogoutButton = () => {
  const SignOut = () => {
    AsyncStorage.removeItem('user')
      .then(() => {
        auth()
          .signOut()
          .then(() => {})
          .catch(e => {
            console.log('SignOut', 'erro em signout de firebase ' + e);
          });
        RNRestart.Restart();
      })
      .catch(e => {
        console.log('LogoutButton', 'erro em signout cache ' + e);
      });
  };

  return (
    <ButtonExit onPress={SignOut} underlayColor="transparent">
      <Image
        source={require('../assets/images/exit.png')}
        accecibilityLabel="Botão sair"
      />
    </ButtonExit>
  );
};

export default LogoutButton;
