import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: none;
    color: #a8a8b3;
    transform: color 0.2s;

    &:hover {
      color: #6666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const Information = styled.section`
  margin-top: 5rem;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;
      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737390;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 2.5rem;
  }

  li {
    & + li {
      margin-left: 80px;
    }

    strong {
      display: block;
      font-size: 36px;
      color: #3d3d4d;
    }

    span {
      display: block;
      margin-top: 4px;
      color: #737380;
    }
  }
`;

export const Issues = styled.section`
  margin-top: 5rem;

  a {
    background-color: #fff;
    border-radius: 6px;
    width: 100%;
    padding: 24px;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(6px);
    }

    & + a {
      margin-top: 16px;
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
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
