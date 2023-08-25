import styled from "styled-components";

export const Wrapper = styled.div`
    display:flex;
    flex-direction: column;  
    width: 100%;
    padding-left: 30px;
`;

export const Menu = styled.div`
    display:flex;
    flex-direction: column;
`;

export const Top = styled.div`
    display:flex;
    flex-direction: row;

`;

export const Headline = styled.div`
    padding: 50px 0 25px 10px;
    font-size: 32px;
    font-weight: bold;
`;

export const Total = styled.div`
    padding-bottom: 15px;
    padding-left: 10px;
    font-size : 18px;
`;

export const Select = styled.select`
    width:140px;
    height: 40px;
    margin: 45px 0px 10px 15px;
    border: 0.5px solid #a8a8a8;
    border-radius: 10px;
    font-size: 16px;
    text-align: center;
`;

export const Layout = styled.div`
    width: 78%;
    height: 530px;
    padding:35px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 2px 5px rgba(0,0,0,.25);
    overflow: scroll;
`;

export const Table = styled.table`
        width: 100%;
        font-size: 14px;
        table-layout: fixed;
    
    th {
        padding-bottom: 15px;
        border-bottom: 1px grey solid;
        font-weight: bold;
    }

    tr{
        text-align: center;
    }

    td {
        padding: 10px 3px;
        text-align: center;
        white-space : nowrap;
		text-overflow: ellipsis;
        overflow:hidden;
    }
`;

export const LogoutButton = styled.button`
    width: 125px;
    height: 40px;
    margin-bottom: 20px;
    padding: 5px;
    color: #84614b;
    background-color: beige; 
    border: 0.5px solid #f5ddce;
    border-radius: 30px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
`;

export const AdminButton = styled.button`
    width: 42px;
    height: 24px;
    margin-right: 5px;
    color: #414141;
    background-color: white;
    border: 0.5px solid #A8A8A8;
    border-radius: 30px;
    font-size: 11px;
`;

export const ReplyButton = styled.button`
    width: 42px;
    height: 24px;
    margin-right: 5px;
    color: #2c54e4;
    background-color: white;
    border: 1px solid #2c54e4;
    border-radius: 30px;
    font-size: 11px;
`;

export const CheckButton = styled.button`
    width: 42px;
    height: 24px;
    margin-right: 5px;
    color: white;
    background-color: #2c54e4;
    border: 1px solid #2c54e4;
    border-radius: 30px;
    font-size: 11px;
`;

