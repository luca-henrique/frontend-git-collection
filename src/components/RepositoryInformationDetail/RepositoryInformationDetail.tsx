import React from 'react';
import { UserRepositoryProps } from '../../pages/Repository/Repository';
import { Information } from '../../pages/Repository/styled';

export const RepositoryInformationDetail = ({
  owner,
  full_name,
  description,
  stargazers_count,
  forks_count,
  open_issues_count,
}: UserRepositoryProps) => {
  return (
    <Information>
      <header>
        <img src={owner.avatar_url} alt={owner.login} />
        <div>
          <strong>{full_name}</strong>
          <p>{description}</p>
        </div>
      </header>
      <ul>
        <li>
          <strong>{stargazers_count}</strong>
          <span>Starts</span>
        </li>
        <li>
          <strong>{forks_count}</strong>
          <span>Forks</span>
        </li>
        <li>
          <strong>{open_issues_count}</strong>
          <span>Issues</span>
        </li>
      </ul>
    </Information>
  );
};
