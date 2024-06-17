import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header, Issues } from './styled';

import { FiChevronLeft } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import { api } from '../../services/api';
import { RepositoryInformationDetail } from '../../components/RepositoryInformationDetail/RepositoryInformationDetail';
import { CardIssue } from '../../components/CardIssue/CardIssue';

export interface UserRepositoryProps {
  full_name: string;
  description: string;
  forks_count: number;
  open_issues_count: number;
  stargazers_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

export interface GithubIssue {
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

export const Repository = () => {
  const { name, repository } = useParams();

  const [repositories, setRepositories] = useState<UserRepositoryProps | null>(
    null,
  );

  const [issues, setIssues] = useState<GithubIssue[]>([]);

  const isExistIssues = issues.length >= 1;

  const repositoryFullName = `${name}/${repository}`;

  useEffect(() => {
    api
      .get(`repos/${repositoryFullName}`)
      .then(response => setRepositories(response.data));

    api
      .get(`repos/${repositoryFullName}/issues`)
      .then(response => setIssues(response.data));
  }, [repositoryFullName]);

  return (
    <div>
      <Header>
        <img src={logo} alt="Git Collection" />
        <Link to="/">
          <FiChevronLeft />
          Voltar
        </Link>
      </Header>

      {!repositories ? (
        <></>
      ) : (
        <RepositoryInformationDetail {...repositories} />
      )}

      <Issues>
        {isExistIssues ? (
          issues.map(issue => <CardIssue {...issue} key={issue.html_url} />)
        ) : (
          <></>
        )}
      </Issues>
    </div>
  );
};

export default Repository;
