import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <h3>Logo</h3>
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>Matheus Castro</strong>
              <Link to="/perfil">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Matheus Castro"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
