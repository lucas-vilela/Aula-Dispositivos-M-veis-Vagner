import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Ginasios from '../Ginasios';
import Pesquisar from '../Search';
import Quadras from '../Quadras';
import Users from '../Users';
import {COLORS} from '../../assets/colors';
import Esportes from '../Esportes';
import Agendamentos from '../Agendamentos';
import Preferencias from '../Preferencias';

const Home = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        unmountOnBlur: true,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: COLORS.primary,
          // position: 'absolute',
          backgroundColor: COLORS.primaryDark,
          height: 60,
          //margin: 20,
          //borderRadius: 10,
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
      <Tab.Screen
        name="Pesquisar"
        component={Pesquisar}
        options={{
          tabBarIcon: ({color, size, focused}) => {
            if (focused) {
              return <Icon name="search" size={size} color={color} />;
            }

            return <Icon name="search-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Agendamentos"
        component={Agendamentos}
        options={{
          tabBarIcon: ({color, size, focused}) => {
            if (focused) {
              return <Icon name="ios-calendar" size={size} color={color} />;
            }

            return (
              <Icon name="ios-calendar-outline" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Preferencias"
        component={Preferencias}
        options={{
          tabBarIcon: ({color, size, focused}) => {
            if (focused) {
              return <Icon name="person" size={size} color={color} />;
            }

            return <Icon name="person-outline" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
