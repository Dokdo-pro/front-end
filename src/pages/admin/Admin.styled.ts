import styled from "styled-components";
export const Wrapper = styled.div`
display: flex;
flex-direction: row;
`

export const Main = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

width: 100%;
height: 100vh;
`

export const Input = styled.input`
    width: 500px;
    height:50px;
    border-radius: 50px;

    &::placeholder{
        color: gray;
        font-size: 15px;
        text-align:center;
    }
`

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    width: 500px;
    padding-bottom: 40px;
    
    & div {
        font-size: 20px;
    }
`

export const Headline = styled.h2`
    text-align:left;
`

export const Table = styled.table`
    width: 500px;
    border-collapse : collapse; //겹치는 이중선 제거

    &td,tr {
        height: 50px;
        text-align: center;
        border: 1px solid #000;
    }

`
export const SideBar = styled.div`
    width:200px;
    height: 100vh;
    background-color: beige;
`
export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
       & div {
        width: 100px;
        height: 100px; 
        background-color: white; 
        margin: 10px 0;
       }
`
export const SideNav = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    & div {
        margin : 20px 0;
    }
`

export const Button = styled.button`
`

