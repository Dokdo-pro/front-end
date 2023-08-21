import React from "react";
import * as A from './Admin.styled';
import AdminComponent from "./Admin";

function AdminUser() {
    return (
        <div>
        <AdminComponent></AdminComponent>
        <A.Content>
            <A.Headline>회원 정보 관리</A.Headline>
            <A.Table>
                <thead>
                <tr>
                    <th>닉네임</th>
                    <th>전화번호</th>
                    <th>이메일</th>
                    <th>관리</th>
                </tr>
                </thead>
                <tbody>
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
                </tbody>
            </A.Table>        
        </A.Content>
    </div>
    )
}

export default AdminUser;