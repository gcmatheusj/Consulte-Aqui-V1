import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;

  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1),
    0px 2px 2px 0px rgba(0, 0, 0, 0.1), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 64px;
  max-width: 900px;
  margin: 0 auto;

  nav {
    display: flex;
    align-items: center;

    h3 {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      color: #00cac9;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  img {
    height: 40px;
    border-radius: 50%;
  }
`;
