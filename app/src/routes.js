import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';

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
            Profile,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#fff',
              inactiveTintColor: 'rgba(255, 255, 255, 0.8)',
              labelStyle: {
                fontSize: 14,
              },
              style: {
                backgroundColor: '#00cac9',
                height: 60,
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
