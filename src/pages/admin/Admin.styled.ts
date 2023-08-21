import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 940px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
`
export const SideBar = styled.div`
    width:160px;
    height:100vh;
    background-color: beige;

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;
`

export const Main = styled.div`
    width:780px;
    height:100vh;

    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const Input = styled.input`
    width: 700px;
    height:50px;
    border-radius: 50px;

    position: static;
    margin-top: 40px;

    &::placeholder{
        color: gray;
        font-size: 15px;
        text-align:center;
    }
`

export const Todo = styled.div`
    font-size:25px;
    font-weight: bold;

    margin-top:50px;
    margin-left: 40px;
    align-self: flex-start;
`

export const Nav = styled.div`
    margin-top:20px;
    display: flex;
    justify-content: space-between;
    width: 700px;

    & div {
        font-size: 20px;
    }
`

export const Content = styled.div`
    position: sticky;

`

export const Headline = styled.div`
    text-align:left;
    font-size: 30px;
    margin-left: 40px;

    position: relative;
`

export const Table = styled.table`
    width: 700px;
    border-collapse : collapse;
    background-color: white;
    border: 1px #a39485 solid;
    box-shadow: 0 2px 5px rgba(0,0,0,.25);
    border-radius: 5px;
    overflow: hidden;
    
    thead {
        height: 30px;
        text-align: center;
        font-weight: bold;
        background-color:#a39485;
        color:white;
    }

    td,tr {
        text-align:center; 
        border: 1px solid #a39485;
        padding:5px;
    }
`

export const Link = styled.a`
   text-decoration: none;
    color:black;
   justify-content: space-between;
    align-items: center;
   ;
`
export const Info = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & div {
        width: 70px;
        height: 70px; 
        background-color: burlywood; 
        margin: 10px 0;
       }
`
export const SideNav = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Button = styled.div`
    width: 100px;
    height: 35px;
    border: none;
    border-radius: 5px;
    background-color: burlywood; 
    margin-bottom: 20px;
`

export const Toggle = styled.button`
    position : absolute;
    top:310px;
    right:320px;
`