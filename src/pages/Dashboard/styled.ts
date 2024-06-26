import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  color: #3a3a3a;
  font-size: 48px;
  max-width: 450px;
  line-height: 3.5rem;
  margin-top: 5rem;
`;

export const Form = styled.form`
  margin-top: 2.5rem;
  max-width: 43.75rem;
  display: flex;
`;

interface InputProps {
  borderError: boolean;
}

export const Input = styled.input<InputProps>`
  flex: 1;
  height: 4.375rem;
  padding: 0 24px;
  border: 2px solid ${props => (props.borderError ? '#c53030' : '#f5f5f5')};
  border-radius: 5px 0 0 5px;
  color: #3a3a3a;
  border-right: 0;

  ::placeholder {
    color: #a8a8a8;
  }
`;

export const Button = styled.button`
  width: 10rem;
  background: #04d361;
  border-radius: 0 5px 5px 0;
  border: 0;
  font-weight: bold;
  color: #fff;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#04d361')};
  }
`;

export const RepositoriesList = styled.section`
  margin-top: 80px;
  max-width: 700px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  a {
    background: #fff;
    border-radius: 0.375rem;
    width: 100%;
    padding: 24px;
    display: flex;
    align-items: center;
    transition: transform 0.2;

    &:hover {
      transform: translateX(6px);
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  div {
    margin: 0 16px;
    flex: 1;

    strong {
      font-size: 20px;
      color: #3d3d4d;
    }

    p {
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 4px;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
