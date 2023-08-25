import React,{ ReactNode } from "react";
import * as S from './SideBar.styled';
import Logo2 from '../../assets/img/Logo2.png';
import User from '../../assets/icon/User.png';
import Note from '../../assets/icon/Note.png';
import Group from '../../assets/icon/Group.png';
import Favorite from '../../assets/icon/Favorite.png';
import Plus from  '../../assets/icon/Plus.png';
import Bell from '../../assets/icon/Bell.png';

interface AdminProps {
   children: ReactNode;
}

function Admin({children}: AdminProps) {
    return (
    <S.Background>
    <S.GreyWrapper>
        <S.SideBar>
            <S.SideNav>
                <S.Logo><S.LogoImg src={Logo2} alt="로고 이미지" /></S.Logo> 
                    <div></div>
                <S.AdminLink to="/admin/user">
                    <S.IconImg src={User} alt="사람 이미지" />회원 정보 관리
                </S.AdminLink>
                    <div></div>
                <S.AdminLink to="/admin/post">
                <S.IconImg src={Note} alt="게시글 이미지" />게시글 관리
                </S.AdminLink>
                    <div></div>
                <S.AdminLink to="/admin/group">
                    <S.IconImg src={Group} alt="모임 이미지" />모임 관리
                </S.AdminLink>
                    <div></div>
                <S.AdminLink to="/admin/inquirylist">
                <S.IconImg src={Favorite} alt="질문 이미지" />문의사항</S.AdminLink>
                    <div></div>
                <S.AdminLink to="/">
                    <S.IconImg src={Plus} alt="문의사항 이미지" />도서 및 공모전 관리
                </S.AdminLink>
            </S.SideNav> 
             <S.LogoutButton><S.IconImg src={Bell} alt="로그아웃 이미지" /> 로그아웃</S.LogoutButton>
        </S.SideBar>
        <S.Children>{children}</S.Children>
    </S.GreyWrapper>
    </S.Background>
    );
}

export default Admin;
