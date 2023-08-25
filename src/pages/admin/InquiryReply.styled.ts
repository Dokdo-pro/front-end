import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 483px;
    height: 717px;
    background-color: white;
`;

export const Headline= styled.div`
    margin-top: 60px;
    font-size: 48px;
    font-weight: 700;
    text-align: center;
`;

export const Form = styled.form` 
    display: flex;
    flex-direction: column;
    width: 422px;
    margin-top: 60px;
`;

export const Title = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Name1 = styled.div`
    display: flex;
    align-items: center;
    font-size:20px;
    font-weight: 600;
    text-align: center;
`;

export const Input = styled.textarea`
    width: 314px;
    height:54px;
    background-color: #EDEDED;
    border-radius: 5px;
    border: none;
    font-size: 15px;

    &::placeholder{
        color: gray;
        font-size: 15px;
        text-align:center;
    }
`;

export const Content = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
`;

export const Name2 = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    font-size:20px;
    font-weight: 600;
`;

export const Detail = styled.textarea`
    width: 314px;
    height:296px;
    background-color: #EDEDED;
    border: none;
    border-radius: 5px;
    font-size: 15px;

    &::placeholder{
        color: gray;
        font-size: 15px;
        text-align:center;
    }
`;

export const Number = styled.div`
    display: flex;
    justify-content: end;
    margin-top: 4px;
    font-size: 12px;
`;

export const Button = styled.button`
    width: 361px;
    height: 41px;
    margin-top: 70px;
    color:#ffffff;
    background-color: #84614b;
    border: none;
    border-radius: 20px;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
`;
