import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ginasios from '../Ginasios';
import Esportes from '../Esportes';
import Quadras from '../Quadras';
import Users from '../Users';
import {COLORS} from '../../assets/colors';

const Home = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        unmountOnBlur: true,
        tabBarStyle:{
          position: 'absolute',
          backgroundColor: COLORS.primaryDark,
          height: 60,
          margin: 20,
          borderRadius: 20,
        },
        tabBarActiveTintColor: COLORS.alert,
        tabBarInactiveTintColor: COLORS.white,
      }}>
      <Tab.Screen name="Ginasios" component={Ginasios} />
      <Tab.Screen name="Esportes" component={Esportes} />
      <Tab.Screen name="Quadras" component={Quadras} />
      <Tab.Screen name="Usuarios" component={Users} />
    </Tab.Navigator>
  );
};

export default Home;
