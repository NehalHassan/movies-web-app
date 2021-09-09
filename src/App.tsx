/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import styled from '@emotion/styled';
import logo from './logo.svg';
import './App.css';

const PinkButton = styled.div({
  height:200,
  width:200,
  background:'pink'
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code css={{color:'red'}}>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <PinkButton/>
    </div>
  );
}

export default App;
