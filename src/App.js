import React, { useState } from 'react';
import './App.css';
import { Board, Row, Square } from "./styled"

function App() {
  const [board, setBoard] = useState([['', '', ''],
  ['', '', ''],
  ['', '', '']])
  const [player, setPlayer] = useState('X')
  const [win, setWin] = useState(false)


  function handleBoardClick(player, row, column) {
    const newBoard = board
    newBoard[row][column] = player;
    setBoard(newBoard)

    if (player === 'X') {
      setPlayer('O')
    } else {
      setPlayer('X')
    }

    // const diagonalLeft = new Set(board[0][0], board[1][1], board[2[2]])
    // const diagonalRight = new Set(board[0][2], board[1][1], board[2[0]])
    // console.log('diagonalLeft', diagonalLeft)
    // console.log('diagonalRight', diagonalRight)


    const column1 = new Set()
    const column2 = new Set()
    const column3 = new Set()
    const diagonalLeft = new Set()
    const diagonalRight = new Set()

    board.forEach((row, rowIndex) => {

      column1.add(row[0])
      column2.add(row[1])
      column3.add(row[2])

      row.forEach((position, positionIndex) => {
        if (rowIndex === positionIndex) {
          diagonalLeft.add(row[positionIndex])
        }
        if ((rowIndex - positionIndex) === row.length - 1) {
          diagonalRight.add(row[positionIndex])
        }
      })

      const rowSet = new Set(row)
      if (rowSet.size === 1 && !rowSet.has('')) {
        setWin(true)
      }
    })

    if (column1.size === 1 && !column1.has('')) {
      setWin(true)
    }
    if (column2.size === 1 && !column2.has('')) {
      setWin(true)
    }
    if (column3.size === 1 && !column3.has('')) {
      setWin(true)
    }
    if (diagonalLeft.size === 1 && !diagonalLeft.has('')) {
      setWin(true)
    }
    if (diagonalRight.size === 1 && !diagonalRight.has('')) {
      setWin(true)
    }



    // board.forEach((row) => {
    //   row.forEach((items) => {

    //   })
    // })
  }


  console.log(win)




  return (
    <div>
      <h1>Hello World</h1>
      <Board>
        <Row>
          <Square onClick={() => handleBoardClick(player, 0, 0)}>{board[0][0]}</Square>
          <Square onClick={() => handleBoardClick(player, 0, 1)}>{board[0][1]}</Square>
          <Square onClick={() => handleBoardClick(player, 0, 2)}>{board[0][2]}</Square>
        </Row>
        <Row>
          <Square onClick={() => handleBoardClick(player, 1, 0)}>{board[1][0]}</Square>
          <Square onClick={() => handleBoardClick(player, 1, 1)}>{board[1][1]}</Square>
          <Square onClick={() => handleBoardClick(player, 1, 2)}>{board[1][2]}</Square>
        </Row>
        <Row>
          <Square onClick={() => handleBoardClick(player, 2, 0)}>{board[2][0]}</Square>
          <Square onClick={() => handleBoardClick(player, 2, 1)}>{board[2][1]}</Square>
          <Square onClick={() => handleBoardClick(player, 2, 2)}>{board[2][2]}</Square>
        </Row>
      </Board>
    </div>
  );
}

export default App;
