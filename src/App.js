import React from 'react';
import './App.css';
import { Board, Row, Square } from "./styled"

function App() {

  return (
    <div>
      <h1>Hello World</h1>
      <Board>
        <Row>
          <Square></Square>
          <Square></Square>
          <Square></Square>
        </Row>
        <Row>
          <Square></Square>
          <Square></Square>
          <Square></Square>
        </Row>
        <Row>
          <Square></Square>
          <Square></Square>
          <Square></Square>
        </Row>
      </Board>
    </div>
  );
}

export default App;
