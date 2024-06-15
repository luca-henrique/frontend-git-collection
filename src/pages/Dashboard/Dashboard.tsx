import React from 'react';
import { Form, Title, Input, Button, RepositoriesList } from './styled';
import { FiChevronsRight } from 'react-icons/fi';

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

      <RepositoriesList>
        <a href="/respository">
          <img src="" alt="" />
          <div>
            <strong>luca-henrique/curso-react</strong>
            <p>Repositorio do mini curso gratuito</p>
          </div>
          <FiChevronsRight size={20} />
        </a>
      </RepositoriesList>
    </div>
  );
};
