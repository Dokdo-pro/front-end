import styled from "styled-components";

export const Wrapper = styled.div`
    display:flex;
    flex-direction: column;  
    justify-content: center;
    width:95%;
    height: 100vh;
`;

export const Menu = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
    height: 100%;
`;

export const Top = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 97%;
    margin: 64px 0 66px 0;
`;

export const Headline = styled.div`
    margin-left: 5px;
    font-size: 32px;
    font-weight: bold;
`;


export const Total = styled.div`
    margin-left: 5px;
    margin-top: -43px;
    margin-bottom: 17px;
    font-size : 20px;
    font-weight: 600px;
    line-height: 24px;
`;

export const Sum = styled.text`
    color: #84614B;
    font-size: 20px;
    font-weight: 800px;
    line-height: 24px;
`;

export const Select = styled.select`
    width:150px;
    height: 40px;
    border: 0.5px solid #a8a8a8;
    border-radius: 10px;
    font-size: 16px;
    text-align: center;
`;

export const Layout = styled.div`
    width: 87%;
    height: 100%;
    padding:38px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 2px 5px rgba(0,0,0,.25);
    overflow: scroll;
`;

export const Table = styled.table`
        width: 100%;
        font-size: 15px;
        table-layout: fixed;
    
    th {
        padding-bottom: 15px;
        border-bottom: 1px grey solid;
        font-size: 18px;
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

export const Input = styled.input`
    width: 210px;
    border: none;
    font-size: 15px;
    text-align: center;
`;

export const Log = styled.div`
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
    cursor: not-allowed;
`;

export const TopButton = styled.div`
    position: fixed;
    right: 21%;
    bottom: 2%;
    z-index: 1;
`

export const ScrollToTop = styled.button`
    padding :12px 8px;
    color:black;
    background-color: white;
    border: 1px solid rgb(210, 204, 193);
    border-radius: 50%;
    font-weight: bold;
    font-size: 13px;
    cursor: pointer;
`
