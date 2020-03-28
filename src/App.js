import React, { useState } from 'react';
import './App.css';
import { Board, Row, Square, Title } from "./styled"
import strawberryImage from './static/strawberry_cake.png'
import chocolateImage from './static/chocolateCake.png'
import cupcakeX from './static/cupcake1.png'
import cupcakeO from './static/cupcake2.png'



function App() {
  const [board, setBoard] = useState([['', '', ''],
  ['', '', ''],
  ['', '', '']])
  const [player, setPlayer] = useState(cupcakeX)
  const [win, setWin] = useState(false)
  const [tie, setTie] = useState(false)



  function winner(board) {
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
          diagonalLeft.add(position)
        }
        if ((rowIndex + positionIndex) === row.length - 1) {
          diagonalRight.add(position)
        }
      })

      const rowSet = new Set(row)
      if (rowSet.size === 1 && !rowSet.has('')) {
        setWin(true)
      }
    })

    if (column1.size === 1 && !column1.has('')) {
      console.log('col1 is a winner')
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
  }


  function handleBoardClick(player, row, column) {
    const newBoard = board

    if (newBoard[row][column] !== '') {
      return
    }

    if (newBoard[row][column] === '') {
      newBoard[row][column] = player;
    }
    setBoard(newBoard)

    if (player === cupcakeX) {
      setPlayer(cupcakeO)
    } else {
      setPlayer(cupcakeX)
    }
    winner(newBoard);
    console.log('win', win)

    const isTie = checkTie(newBoard, win)
    console.log('isTie', isTie)

    if (isTie) {
      setTie(true)
    }
  }

  function checkTie(board, win) {
    const allPositions = new Set()

    board.forEach((row) => {
      row.forEach((item) => {
        allPositions.add(item)
      })
    })

    if (!allPositions.has('') && !win) {
      console.log('win', win)
      return true
    }
    return false
  }



  return (
    <div>
      <Title>CAKE-TAC-TOE</Title>
      {win && <h2>You  win!</h2>}
      {tie && !win && <h2>It's a tie</h2>}
      <Board>
        <Square onClick={() => handleBoardClick(player, 0, 0)}>{<img src={board[0][0]} width='90' style={{ display: "block", margin: "auto", marginTop: "15px" }} />}</Square>
        <Square onClick={() => handleBoardClick(player, 0, 1)}>{<img src={board[0][1]} width='90' style={{ display: "block", margin: "auto", marginTop: "15px" }} />}</Square>
        <Square onClick={() => handleBoardClick(player, 0, 2)}>{<img src={board[0][2]} width='90' style={{ display: "block", margin: "auto", marginTop: "15px" }} />}</Square>
        <Square onClick={() => handleBoardClick(player, 1, 0)}>{<img src={board[1][0]} width='90' style={{ display: "block", margin: "auto", marginTop: "15px" }} />}</Square>
        <Square onClick={() => handleBoardClick(player, 1, 1)}>{<img src={board[1][1]} width='90' style={{ display: "block", margin: "auto", marginTop: "15px" }} />}</Square>
        <Square onClick={() => handleBoardClick(player, 1, 2)}>{<img src={board[1][2]} width='90' style={{ display: "block", margin: "auto", marginTop: "15px" }} />}</Square>
        <Square onClick={() => handleBoardClick(player, 2, 0)}>{<img src={board[2][0]} width='90' style={{ display: "block", margin: "auto", marginTop: "15px" }} />}</Square>
        <Square onClick={() => handleBoardClick(player, 2, 1)}>{<img src={board[2][1]} width='90' style={{ display: "block", margin: "auto", marginTop: "15px" }} />}</Square>
        <Square onClick={() => handleBoardClick(player, 2, 2)}>{<img src={board[2][2]} width='90' style={{ display: "block", margin: "auto", marginTop: "15px" }} />}</Square>
      </Board>
    </div >
  );
}

export default App;
