import React from 'react';
import { Form, Title, Input, Button } from './styled';

import logo from '../../assets/logo.svg';

export const Dashboard = () => {
  return (
    <div>
      <img src={logo} alt="Logo" />
      <Title>Catálogo de repositorios do github</Title>

      <Form>
        <Input placeholder="username/repository" />
        <Button type="submit">Buscar</Button>
      </Form>
    </div>
  );
};
