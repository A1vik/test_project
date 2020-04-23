import React from 'react';
import styled from 'styled-components';
import { Container } from '../styled/styled';

const Header = styled.header`
  background-color: #1e88e5;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
  box-sizing: border-box;
`;

const TitleH1 = styled.h1`
  margin: 0;
  padding: 2rem 0;
  text-align: center;
  color: #FFFFFF;

  @media (max-width: 650px) {
    font-size: 1.5rem;
  }
`;

export const Navbar = () => {
  return (
    <>
      <Header>
        <Container>
          <TitleH1>
            Пополнение счета мобильного телефона
          </TitleH1>
        </Container>
      </Header>
    </>
  )
}