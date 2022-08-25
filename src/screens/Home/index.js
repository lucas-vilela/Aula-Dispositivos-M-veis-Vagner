import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

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
        tabBarShowLabel: false,
        headerShown: false,
        unmountOnBlur: true,
        tabBarStyle: {
          borderTopWidth: 0,
          position: 'absolute',
          backgroundColor: COLORS.primaryDark,
          height: 60,
          margin: 20,
          borderRadius: 10,
        },
        tabBarActiveTintColor: COLORS.alert,
        tabBarInactiveTintColor: COLORS.white,
      }}>
      <Tab.Screen
        name="Ginasios"
        component={Ginasios}
        options={{
          tabBarIcon: ({color, size, focused}) => {
            if (focused) {
              return <Icon name="home" size={size} color={color} />;
            }

            return <Icon name="home-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen name="Esportes" component={Esportes} />
      <Tab.Screen name="Quadras" component={Quadras} />
      <Tab.Screen name="Usuarios" component={Users} />
    </Tab.Navigator>
  );
};

export default Home;
