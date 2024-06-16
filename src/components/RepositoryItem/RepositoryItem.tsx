import React from 'react';
import { FiChevronsRight } from 'react-icons/fi';
import { Repository } from '../../@types/repository';

export const RepositoryItem = ({
  full_name,
  owner,
  description,
}: Repository) => {
  return (
    <a href="/respository">
      <img src={owner.avatar_url} alt={full_name} />
      <div>
        <strong>{full_name}</strong>
        <p>{description}</p>
      </div>
      <FiChevronsRight size={20} />
    </a>
  );
};
