import React from 'react';
import { StatusBar } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

// import { Container } from './styles';

export default function Profile() {
  return (
    <Background>
      <StatusBar backgroundColor="#00cac9" barStyle="light-content" />
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={24} color={tintColor} />
  ),
};
