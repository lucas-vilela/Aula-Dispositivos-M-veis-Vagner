import React from 'react';
import styled from 'styled-components/native';

const View = styled.View`
  margin-left: -10px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Image = styled.Image`
  width: 163px;
  height: 53px;
  //margin: 10px 0 10px 82px;
`;

const Header = () => {
  return (
    <View>
      <Image
        source={require('../assets/images/Logo.png')}
        accecibilityLabel="Logo"
      />
    </View>
  );
};
export default Header;
