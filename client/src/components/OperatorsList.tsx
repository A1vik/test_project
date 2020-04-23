import React, { useState, useEffect, useCallback } from 'react';
import { useHttp } from '../hooks/http.hook';
import { OperatorItem } from './OperatorItem';
import { List } from '../styled/styled';
import { Loader } from './Loader';
import { Operators, Operator } from '../types/types';

export const OperatorsList = () => {
  const { request, loading } = useHttp();
  const [ operators, setOperators ] = useState<Operators | []>([]);

  const fetchOperators = useCallback(async (): Promise<void> => {
    try {
      const fetched: Operators = await request('/api/operators');
      setOperators(fetched)
    } catch (e) {}
  }, [request]);

  useEffect(() => {
    fetchOperators()
  }, [fetchOperators]);

  const renderList = (operators: Operators) => (
    <List>
      {operators.map((operator: Operator) => (
        <OperatorItem key={operator.id} operator={operator} />
      ))}
    </List>
  )

  return (
    <React.Fragment>
      { loading ? <Loader /> : renderList(operators)}
    </React.Fragment>
  )
}