//import 'react-native-gesture-handler';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {COLORS} from '../assets/colors';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ForgotPassWord from '../screens/ForgotPassWord';
//import HeaderDark from '../components/HeaderDark';
import HeaderAlert from '../components/HeaderAlert';
import Preload from '../screens/Preload';
import Student from '../screens/Student';
import Course from '../screens/Course';
import Courses from '../screens/Courses';
import HeaderAlertHome from '../components/HeaderAlertHome';
import Users from '../screens/Users';
import User from '../screens/User';
import Students from '../screens/Students';
import Home from '../screens/Home';
import Ginasios from '../screens/Ginasios';
import Ginasio from '../screens/Ginasio';
import Quadras from '../screens/Quadras';
import Quadra from '../screens/Quadra';
import Esportes from '../screens/Esportes';
import Esporte from '../screens/Esporte';

const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Preload">
        <Stack.Screen
          name="Preload"
          component={Preload}
          options={preloadStyle}
        />
        <Stack.Screen
          name="Alunos"
          component={Students}
          options={alertBarHome}
        />
        <Stack.Screen name="Aluno" component={Student} options={alertBar} />
        <Stack.Screen name="Cursos" component={Courses} options={alertBar} />
        <Stack.Screen name="Curso" component={Course} options={alertBar} />
        <Stack.Screen name="Usuarios" component={Users} options={alertBar} />
        <Stack.Screen name="User" component={User} options={alertBar} />
        <Stack.Screen name="SignIn" component={SignIn} options={SignInBar} />
        <Stack.Screen name="SignUp" component={SignUp} options={alertBar} />
        <Stack.Screen name="Home" component={Home} options={alertBar} />
        <Stack.Screen name="Ginasios" component={Ginasios} options={alertBar} />
        <Stack.Screen name="Ginasio" component={Ginasio} options={alertBar} />
        <Stack.Screen name="Quadras" component={Quadras} options={alertBar} />
        <Stack.Screen name="Quadra" component={Quadra} options={alertBar} />
        <Stack.Screen name="Esportes" component={Esportes} options={alertBar} />
        <Stack.Screen name="Esporte" component={Esporte} options={alertBar} />
        <Stack.Screen
          name="ForgotPassWord"
          component={ForgotPassWord}
          options={alertBar}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppStack;

const alertBarHome = {
  headerTitle: () => <HeaderAlertHome />,
  headerStyle: {backgroundColor: COLORS.alert},
  headerTitleStyle: {color: COLORS.primaryDark, marginLeft: 50},
};

const preloadStyle = {
  headerShown: false,
};

const SignInBar = {
  //headerShown: false,
  headerTitle: () => <HeaderAlertHome />,
  headerMode: 'float',
  headerStyle: {backgroundColor: COLORS.alert},
};

const alertBar = {
  headerTitle: () => <HeaderAlert />,
  headerStyle: {backgroundColor: COLORS.alert},
  headerTitleStyle: {color: COLORS.primaryDark},
};
