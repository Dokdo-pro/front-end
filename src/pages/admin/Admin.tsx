import React from "react";
import {Wrapper, Main, Input, Nav, Headline, Table, SideBar, SideNav, Info, Button} from './Admin.styled';

function Admin() {
    return (
    <Wrapper>
     <SideBar>
        <Info>
        <div>Logo</div>
        <div>adminInfo</div>
        </Info>
        <SideNav>
                <div>사이트 바로가기</div>
                <div>대시보드</div>
                <div>사용자 목록</div>
                <div>게시글 관리</div>
                <div>모임 목록</div>
                <div>문의 사항</div>
            <Button>로그아웃</Button>
        </SideNav>
        </SideBar>
        <Main>
        <section>
        <Input type='text' placeholder='검색어를 입력하세요.' />
            <h2>오늘의 할 일</h2>
        <Nav>
            <div>신규 가입</div>
            <div>신규 모임</div>
            <div>신규 게시글</div>
            <div>답변 대기 문의</div>
        </Nav>
        </section>
        <section>
        <div>
            <Headline>회원 정보 관리</Headline>
            <Table>
                <tr>
                    <th>닉네임</th>
                    <th>전화번호</th>
                    <th>이메일</th>
                    <th>관리</th>
                </tr>
                <tr>
                    <td>강낭콩</td>
                    <td>010-1234-1234</td>
                    <td>abcabd@test.com</td>
                    <td>
                        <button>수정</button>
                        <button>사용정지</button>
                    </td>
                </tr>
                <tr>
                    <td>강낭콩</td>
                    <td>010-1234-1234</td>
                    <td>abcabd@test.com</td>
                    <td>
                        <button>수정</button>
                        <button>사용정지</button>
                    </td>
                </tr>
                <tr>
                    <td>강낭콩</td>
                    <td>010-1234-1234</td>
                    <td>abcabd@test.com</td>
                    <td>
                        <button>수정</button>
                        <button>사용정지</button>
                    </td>
                </tr>
                <tr>
                    <td>강낭콩</td>
                    <td>010-1234-1234</td>
                    <td>abcabd@test.com</td>
                    <td>
                        <button>수정</button>
                        <button>사용정지</button>
                    </td>
                </tr>
                <tr>
                    <td>강낭콩</td>
                    <td>010-1234-1234</td>
                    <td>abcabd@test.com</td>
                    <td>
                        <button>수정</button>
                        <button>사용정지</button>
                    </td>
                </tr>
                <tr>
                    <td>강낭콩</td>
                    <td>010-1234-1234</td>
                    <td>abcabd@test.com</td>
                    <td>
                        <button>수정</button>
                        <button>사용정지</button>
                    </td>
                </tr>
                <tr>
                    <td>강낭콩</td>
                    <td>010-1234-1234</td>
                    <td>abcabd@test.com</td>
                    <td>
                        <button>수정</button>
                        <button>사용정지</button>
                    </td>
                </tr>
            </Table>        
        </div>
        </section>
        </Main>
    </Wrapper>
    )
}

export default Admin;
