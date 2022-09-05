import React from 'react';
import styled from 'styled-components/native';

const Image = styled.Image`
  width: 165px;
  height: 54px;
  margin: 10px 30px 10px 0px;
`;

const Divcentral = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Header = () => {
  return (
    <Divcentral>
      <Image
        source={require('../assets/images/LogoDark.png')}
        accecibilityLabel="Logo"
      />
    </Divcentral>
  );
};
export default Header;
