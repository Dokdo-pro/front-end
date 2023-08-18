import styled from 'styled-components';

export const container = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 474px;
`;

export const menu = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 15px 0;
    width: 100%;
    background-color: #f3f3f3;
`;

export const menuItem = styled.a`
    text-decoration: none;
    color: #333;
    cursor: pointer;
    font-weight: bold;
`;

export const image = styled.img`
    width: 100%;
    max-width: 600px;
    margin: 20px auto;
`;

export const startButton = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
`;

export const socialIcons = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;
`;

export const socialIcon = styled.a`
    margin: 0 10px;
`;
export const socialIconImage = styled.img`
    width: 24px; // 원하는 너비
    height: 24px; // 원하는 높이
`;
