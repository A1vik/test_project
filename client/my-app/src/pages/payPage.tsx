import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Navbar } from '../components/Navbar';
import { PayCard } from '../components/PayCard';
import { useHttp } from '../hooks/http.hook';
import { Loader } from '../components/Loader';
import { Operator } from '../types/types';

const PayTitle = styled.h1`
  text-align: center;

  @media (max-width: 650px) {
    font-size: 1.5rem;
  }
`
type Id = {
  match: { params: { id: string}}
}

export const PayPage = ({ match: { params: { id } }}: Id) => {
  const [operator, setOperator] = useState<Operator>({id: '', title: '', image: ''});
  const {request, loading} = useHttp();

  const fetchOperator = useCallback(async () => {
    try {
      const fetched: Operator = await request(`/api/operators/${id}`);
      setOperator(fetched);
    } catch (e) {}
  }, [request, id]);

  useEffect(() => {
    fetchOperator();
  }, [fetchOperator]);

  return (
    <React.Fragment>
      <Navbar />
      {
        loading
          ? <Loader />
          : <React.Fragment>
              <PayTitle>Страница оплаты {operator.title}</PayTitle>
              <PayCard operator={operator} />
            </React.Fragment>
      }
    </React.Fragment>
  )
};