import styled from "styled-components";
import './Fonts/kr-cupcake-font/KrCupcake-vvrZ.ttf'

// export const Board = styled.div`
//     display: grid;
//     border-spacing: 5px; 
//     margin-left:auto; 
//     margin-right:auto;
// `
export const Board = styled.div`
    display: grid;
    grid-template-columns: 130px 130px 130px;
    justify-content: center; 
`
export const Square = styled.div`
    height: 130px; 
    background: #D9F1F1;
    border: 5px solid white; 
    cursor: pointer
`
export const Title = styled.h1`
    font-family: Cupcake; 
    font-size: 70px;
    color: #FADEE1; 
    text-align: center;
    margin: 20px; 
`
