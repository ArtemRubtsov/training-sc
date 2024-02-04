import React from 'react';
import styled from 'styled-components';
import { Card } from './components/card/Card';
import cardPhoto from './img/Rectangle-1.webp'


function App() {
  return (
    <StyledApp>
      <Card img={cardPhoto}/>
    </StyledApp>
  );
}

export default App;


const StyledApp = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0 auto;
  min-height: 100vh;
  background-color: #f4f4f4;
`

