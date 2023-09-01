import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Background =styled.div`
    display: flex;
    justify-content: center;    
    width: 100%;
    height: 100vh;
    background-color: #fdf8ef;
`;

export const GreyWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 940px;
    height: 100%;
    margin: 0 auto;
    background-color: #eeeeee;
`;

export const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;
    width:187px;
    height:100%;
    background-color: white;
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 44px;
    margin-bottom: 47.5px;
    width: 98px;
    height: 64px; 
`;

export const SideNav = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    
      div {
        padding-top:16.5px;
        padding-bottom: 16.5px;
    }
`;

export const AdminLink = styled(NavLink)`
    width: 140px;
    height: 32px;
    color:#b7b7b7;
    font-size: 17px;
    font-weight: 700;
    line-height: 21.6px;
    text-decoration: none;
    text-align:left;

    &.active {
        padding-left: 10px;
        color: #84614b;
        border-left: 9px solid #84614b;
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
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const LogoImg = styled.img`
    width: 120px;
    height: 50px;
`;

export const SideMenu = styled.div`
    display: flex;
    justify-content: center;
    `

export const IconImg = styled.img`
    width: 15px;
    height: 15px;
    padding-right: 10px;
`;

export const LogoutBtn = styled.button`
  width: 124px;
  height: 40px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const LogoutImage = styled.img`
 
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
`;
