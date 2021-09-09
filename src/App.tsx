/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import styled from '@emotion/styled';

const PinkButton = styled.div({
  height:200,
  width:200,
  background:'pink'
});

function App() {
  return (
    <div className="App">
      <p>Movies list</p>
      <PinkButton/>
    </div>
  );
}

export default App;
