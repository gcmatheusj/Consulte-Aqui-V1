import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';

import SelectProvider from './screens/New/SelectProvider';
import SelectDateTime from './screens/New/SelectDateTime';
import Confirm from './screens/New/Confirm';

import Dashboard from './screens/Dashboard';
import Profile from './screens/Profile';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard,
            New: {
              screen: createStackNavigator(
                {
                  SelectProvider,
                  SelectDateTime,
                  Confirm,
                },
                {
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#fff',
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                  },
                }
              ),
              navigationOptions: {
                tabBarVisible: false,
                tabBarLabel: 'Agendar',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="add-circle-outline" size={26} color={tintColor} />
                ),
              },
            },
            Profile,
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#00cac9',
              inactiveTintColor: '#bdbdbd',
              labelStyle: {
                fontSize: 14,
              },
              style: {
                backgroundColor: '#fff',
                height: 54,
                fontSize: 20,
              },
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
