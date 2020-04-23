import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { HomePage } from './pages/homePage';
import { PayPage } from './pages/payPage';

export const useRoutes = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <HomePage />
      </Route>
      <Route path='/pay/:id' component={PayPage}/>
      <Redirect to='/' />
    </Switch>
  )
}