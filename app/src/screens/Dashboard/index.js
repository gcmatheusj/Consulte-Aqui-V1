import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';
import Appointment from '~/components/Appointments';

import { Container, Title, List } from './styles';

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function loadAppointmens() {
      const response = await api.get('appointments');

      setAppointments(response.data);
    }

    loadAppointmens();
  }, []);

  async function handleCancel(id) {
    const response = await api.delete(`appointments/${id}`);

    setAppointments(
      appointments.map(appointment =>
        appointment.id === id
          ? {
              ...appointment,
              canceled_at: response.data.canceled_at,
            }
          : appointment
      )
    );
  }

  return (
    <Background>
      <StatusBar backgroundColor="#00cac9" barStyle="light-content" />
      <Container>
        <Title>Agendamentos</Title>

        <List
          data={appointments}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Appointment onCancel={() => handleCancel(item.id)} data={item} />
          )}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="favorite" size={24} color={tintColor} />
  ),
};
