import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import GinasiosTab from '../Ginasios';
import EsportesTab from '../';
import QuadrasTab from '../Quadras';
import UsersTab from '../Users';
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
      <Tab.Screen name="Ginasios" component={GinasiosTab} />
      <Tab.Screen name="Esportes" component={EsportesTab} />
      <Tab.Screen name="Quadras" component={QuadrasTab} />
      <Tab.Screen name="Usuarios" component={UsersTab} />
    </Tab.Navigator>
  );
};

export default Home;
