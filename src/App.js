import React from 'react'
import Input from './Component/Input'
import styled from 'styled-components';

const App = () => {
  return (
    <Head>
      <h1>Summarize Your Text 👇</h1>
      <Input />
    </Head>
  )
};

const Head = styled.div`
  color: white;
  height: -webkit-fill-available;
  display:flex;
  flex-direction:column;
  background-color:#2d2d2d;
  align-items:center;
  padding-top: 3rem ;

  h1 {
    margin: 0rem  0rem 2rem 0rem;
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;


export default App