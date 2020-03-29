import styled from "styled-components";
import './Fonts/kr-cupcake-font/KrCupcake-vvrZ.ttf'


export const Board = styled.div`
    display: grid;
    grid-template-columns: 130px 130px 130px;
    justify-content: center; 
`
export const Square = styled.div`
    height: 130px; 
    background: #B6E3E9;
    border: 5px solid #FAF1D6; 
    cursor: pointer
`
export const Title = styled.h1`
    font-family: Cupcake; 
    font-size: 70px;
    color: #FDAFAB; 
    text-align: center;
    margin: 20px, auto; 
`

export const Image = styled.img`
    display: block; 
    margin: auto;
`

export const Button = styled.button`
    background-color: #FDAFAB;  
    font-family: Comic Sans MS; 
    font-size: 20px;
    font-weight: bold;
    border: none;
    color: white;
    padding: 10px;
    text-align: center;
    display: block; 
    margin: 10px auto; 
`
export const Winner = styled.h2`
    text-align: center;
    font-family: Comic Sans MS; 
    color: #FDAFAB;
    font-weight: bold;
`

export const WinnerPic = styled.div`
    width: 350px;
    height: 350px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
`
