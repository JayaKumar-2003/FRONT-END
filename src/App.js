// import logo from './logo.svg';
import './App.css';
import Header from'../src/JS/Header' ;
import React from 'react'
import BodyRight from './JS/BodyRight';
import BodyLeft from './JS/BodyLeft';
import { Container } from 'react-bootstrap';
const App = () => {
  return (
    <div>
      <Header>
      </Header>
      <Container className='container'>
      <BodyRight></BodyRight>
      <BodyLeft></BodyLeft>
      </Container>
      
      
    </div>
  )
}

export default App;

