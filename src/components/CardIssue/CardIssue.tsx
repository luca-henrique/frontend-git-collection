import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

export interface GithubIssue {
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

export const CardIssue = ({ html_url, title, user }: GithubIssue) => {
  return (
    <a href={html_url}>
      <div>
        <strong>{title}</strong>
        <p>{user.login}</p>
      </div>
      <FiChevronRight size={20} />
    </a>
  );
};
