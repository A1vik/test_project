import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Operator } from '../types/types';

const OperatorLi = styled.li`
  width: 300px;
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: #fff59d;
  opacity: .7;
  border-radius: 10px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
  &:hover {
    background-color: #fff176;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  text-decoration: none;
  margin: 0 auto;
  height: 100%;
`

const OperatorLogo = styled.img`
  max-width: 200px;
  height: auto;
`;

const OperatorName = styled.span`
  color: black;
`

type Props = {
  operator: Operator
}

export const OperatorItem = ({operator}: Props) => {
  return (
    <OperatorLi>
      <StyledLink to={`/pay/${operator.id}`}>
        <OperatorLogo src={operator.image} alt={operator.title} />
        <OperatorName>{operator.title}</OperatorName>
      </StyledLink>
    </OperatorLi>
  )
}