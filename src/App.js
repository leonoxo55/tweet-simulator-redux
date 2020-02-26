import React from 'react';
import { Container } from 'react-bootstrap';
import Menu from './components/Menu';

//Redux
import store from './store';
import { Provider } from 'react-redux'


export default function App() {
  return (
    <Provider store={store}>
      <Menu />
      <Container className='mt-5' >
        <h1 className='text-center'>Tweets</h1>
      </Container>
    </Provider>
    
  );
}

