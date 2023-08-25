import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Background =styled.div`
    display: flex;
    justify-content: center;    
    width: 1440px;
    height: 100vh;
    background-color: #fdf8ef;
`;

export const GreyWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 800px;
    height: 100%;
    margin: 0 auto;
    background-color: #e9ecef;
`;

export const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;
    width:174px;
    height:100%;
    background-color: white;
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 20px;
    width: 100px;
    height: 50px; 
`;

export const SideNav = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    
      div {
        padding-top:10px;
        padding-bottom: 10px;
    }
`;

export const AdminLink = styled(NavLink)`
    width: 140px;
    height: 30px;
    color:grey;
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;
    text-align:left;

    &.active {
        padding-left: 10px;
        color: #84614b;
        border-left: 7px solid #a39485;
        font-weight: 900;
    }
`;

export const ReplyLink = styled(NavLink)`
    width: 140px;
    height: 30px;
    color:black;
    font-size: 11px;
    text-decoration: none;
    text-align: center;

    &.active {
        padding-left: 15px;
        color: #84614b;
        border-left: 5px solid #a39485;
        font-weight: 700;
    }
`;

export const Children = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`;

export const LogoImg = styled.img`
    width: 120px;
    height: 50px;
`;

export const IconImg = styled.img`
    width: 15px;
    height: 15px;
    padding-right: 10px;
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
