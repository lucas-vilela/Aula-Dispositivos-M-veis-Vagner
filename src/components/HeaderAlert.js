import React from 'react';
import styled from 'styled-components/native';

const Image = styled.Image`
  width: 165px;
  height: 54px;
  margin: 10px 0 10px 42px;

`;

const Header = () => {
  return (
    //<View>
    <Image
      source={require('../assets/images/LogoDark.png')}
      accecibilityLabel="Logo"
    />
    // </View>
  );
};
export default Header;
