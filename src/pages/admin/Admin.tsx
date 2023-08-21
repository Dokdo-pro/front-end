import React from "react";
import { Link } from "react-router-dom";
import * as A from './Admin.styled';

function AdminComponent() {
    return (
    <A.Wrapper>
        <A.SideBar>
        <A.Info>
            <div>Logo</div>
            <div>adminInfo</div>
        </A.Info>
        <A.SideNav>
                <Link to="/">홈</Link>
                <Link to="/admin">대시보드</Link>
                <Link to="/admin/user">사용자 목록</Link>
                <Link to="/admin/post">게시글 관리</Link>
                <Link to="/admin/group">모임 목록</Link>
                <Link to="/admin/inquirylist">문의 사항</Link>
        </A.SideNav>    
        <A.Button>로그아웃</A.Button>

        </A.SideBar>
        <A.Main>
        <A.Input type='text' placeholder='검색어를 입력하세요.' />
        <A.Todo>오늘의 할 일</A.Todo>
        <A.Nav>
            <div>신규 가입</div>
            <div>신규 모임</div>
            <div>신규 게시글</div>
            <div>답변 대기 문의</div>
        <A.Content></A.Content>
        </A.Nav>
        </A.Main>
    </A.Wrapper>
    );
}

export default AdminComponent;
