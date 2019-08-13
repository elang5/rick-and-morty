import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { StoreProvider } from './Store';
import { Router, RouteComponentProps } from '@reach/router'
import HomePage from './components/HomePage'
import FavPage from './components/FavPage'

const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps) => props.pageComponent
ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path='/'>
        <RouterPage pageComponent={<HomePage />} path='/' />
        <RouterPage pageComponent={<FavPage />} path='/faves' />
      </App>
    </Router>
  </StoreProvider>
  , document.getElementById('root'));

