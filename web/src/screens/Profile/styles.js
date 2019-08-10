import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      font-size: 15px;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #f44336;
      align-self: flex-start;
      margin: 0 0 10px;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 15px;
      box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1),
        0px 2px 2px 0px rgba(0, 0, 0, 0.1), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }
  }

  > button {
    width: 100%;
    margin: 10px 0 0;
    height: 44px;
    background: #ef5350;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 15px;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1),
      0px 2px 2px 0px rgba(0, 0, 0, 0.1), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.05, '#ef5350')};
    }
  }
`;
