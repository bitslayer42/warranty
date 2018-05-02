import React from 'react';  //, { Component }
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './AppContainer';
import ModalContainer from './ModalContainer';
import Reducer from './Reducer';
import { createStore } from 'redux';

const store = createStore(Reducer);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer plan="PCP"/>
  </Provider>, 
  document.getElementById('PCP')
);
ReactDOM.render(
  <Provider store={store}>
    <AppContainer plan="ACP"/>
  </Provider>, 
  document.getElementById('ACP')
);
ReactDOM.render(
  <Provider store={store}>
    <AppContainer plan="MC"/>
  </Provider>, 
  document.getElementById('MC')
);
ReactDOM.render(
  <Provider store={store}>
    <AppContainer plan="MCU"/>
  </Provider>, 
  document.getElementById('MCU')
);
ReactDOM.render(
  <Provider store={store}>
    <AppContainer plan="LP"/>
  </Provider>, 
  document.getElementById('LP')
);
ReactDOM.render(
  <Provider store={store}>
    <ModalContainer >Amazing Content 1!!</ModalContainer>
  </Provider>, 
  document.getElementById('MODAL')
);