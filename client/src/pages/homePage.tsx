import React from 'react';
import { Navbar } from '../components/Navbar';
import { OperatorsList } from '../components/OperatorsList';

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <OperatorsList />
    </>
  )
}