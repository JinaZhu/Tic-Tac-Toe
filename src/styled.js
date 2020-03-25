import styled from "styled-components";

export const Board = styled.div`
    display: table;
    border-spacing: 5px 
`

export const Row = styled.div`
    display: table-row
`
export const Square = styled.div`
    width: 200px;
    height: 200px;
    background: grey;
    display: table-cell;
`