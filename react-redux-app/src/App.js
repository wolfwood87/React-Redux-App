import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Quotes from './components/Quotes';
import styled from 'styled-components';

function App() {
  const Container = styled.div`
    background-color: #FADBAA;
    width: 70%;
    margin: 2% auto;
    border-radius: 15px;
    border: 4px solid #443723;
    font-family: "Montserrat";
    padding-bottom: 10%;
  `
  const HeaderText = styled.h1`
  font-family: "Tangerine"
  `
  return (
    <Container className="App">
      <HeaderText>Lord of the Rings Character Generator</HeaderText>
      <Header />
      <Quotes />
    </Container>
  );
}

export default App;
