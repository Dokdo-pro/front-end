import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 940px;
    min-height: 100%;
    margin: 0 auto;
    background-color: beige;
`
export const Header = styled.div`
    max-width: 940px;
    padding : 20px;
    display: flex;
    align-items: center;
`

export const Container = styled.div`
    margin: 0 auto;    
    box-sizing: border-box;
    position: relative;

    margin-bottom: 20px;
`

export const Title = styled.div`
    font-size: 40px; 
    `

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    max-width: 900px;


`
export const Input = styled.input`
    width: 700px;
    height:50px;
    border-radius: 5px;
    border: none;
    padding: 0 30px;


    &::placeholder{
        color: gray;
        font-size: 15px;
        text-align:center;
    }
`
export const Name = styled.div`
    padding: 10px 0 ;
`

export const Detail = styled.input`
    width: 700px;
    height:200px;
    border-radius: 5px;
    border: none;
    padding: 0 30px;

    &::placeholder{
        color: gray;
        font-size: 15px;
        text-align:center;
`

export const Button = styled.button`
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 10px;
    background-color: burlywood;
    margin: 25px 0;
`