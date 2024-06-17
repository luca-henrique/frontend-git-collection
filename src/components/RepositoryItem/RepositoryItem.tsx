import React from 'react';
import { FiChevronsRight } from 'react-icons/fi';
import { Repository } from '../../@types/repository';
import { Link } from 'react-router-dom';

export const RepositoryItem = ({
  full_name,
  owner,
  description,
}: Repository) => {
  return (
    <Link to={`/respository/${full_name}`}>
      <img src={owner.avatar_url} alt={full_name} />
      <div>
        <strong>{full_name}</strong>
        <p>{description}</p>
      </div>
      <FiChevronsRight size={20} />
    </Link>
  );
};
