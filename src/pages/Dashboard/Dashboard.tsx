import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { Form, Title, Input, Button, RepositoriesList, Error } from './styled';

import logo from '../../assets/logo.svg';
import { api } from '../../services/api';
import { RepositoryItem } from '../../components/RepositoryItem/RepositoryItem';

interface UserRepositoryProps {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

export const Dashboard = () => {
  const [repositories, setRepositories] = useState<UserRepositoryProps[]>(
    () => {
      const storageRepositories = localStorage.getItem(
        '@GitCollection:repositories',
      );

      if (storageRepositories) {
        return JSON.parse(storageRepositories);
      }
    },
  );
  const [searchRepository, setSearchRepository] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    localStorage.setItem(
      '@GitCollection:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  const onSubmitSearchRepository = async (
    event: SyntheticEvent<HTMLFormElement, SubmitEvent>,
  ): Promise<void> => {
    event.preventDefault();
    try {
      if (searchRepository.length <= 0) {
        setErrorMessage('Informe o usernmae/repositório');
        return;
      }

      const { data } = await api.get<UserRepositoryProps>(
        `repos/${searchRepository}`,
      );

      setRepositories([...repositories, data]);
      setSearchRepository('');
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeSearchRepository = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchRepository(event.target.value);
  };

  return (
    <div>
      <img src={logo} alt="Logo" />
      <Title>Catálogo de repositorios do github</Title>

      <Form onSubmit={onSubmitSearchRepository}>
        <Input
          borderError={Boolean(errorMessage)}
          placeholder="username/repository"
          required
          value={searchRepository}
          onChange={handleChangeSearchRepository}
        />
        <Button type="submit">Buscar</Button>
      </Form>

      {errorMessage && <Error>{errorMessage}</Error>}

      <RepositoriesList>
        {repositories.map(repository => {
          return <RepositoryItem {...repository} key={repository.full_name} />;
        })}
      </RepositoriesList>
    </div>
  );
};

export default Dashboard;
