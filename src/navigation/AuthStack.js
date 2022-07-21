//import 'react-native-gesture-handler';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {COLORS} from '../assets/colors';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ForgotPassWord from '../screens/ForgotPassWord';
import HeaderDark from '../components/HeaderDark';
import HeaderAlert from '../components/HeaderAlert';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignIn} options={SignInBar} />
      <Stack.Screen name="SignUp" component={SignUp} options={alertBar} />
      <Stack.Screen
        name="ForgotPassWord"
        component={ForgotPassWord}
        options={alertBar}
      />
    </Stack.Navigator>
  );
};
export default AuthStack;

const SignInBar = {
  //headerShown: false,
  headerTitle: () => <HeaderDark />,
  headerMode: 'float',
  headerStyle: {backgroundColor: COLORS.primaryDark},
};

const alertBar = {
  headerTitle: () => <HeaderAlert />,
  headerStyle: {backgroundColor: COLORS.alert},
  headerTitleStyle: {color: COLORS.primaryDark},
};
