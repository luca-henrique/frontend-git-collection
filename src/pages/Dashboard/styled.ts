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

export const Input = styled.input`
  flex: 1;
  height: 4.375rem;
  padding: 0 24px;
  border: 2px solid #fff;
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
