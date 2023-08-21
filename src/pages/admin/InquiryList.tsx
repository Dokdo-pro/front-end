import React from "react";
import { Link } from "react-router-dom";
import * as A from './Admin.styled';
import AdminComponent from "./Admin";

function InquiryList (){
    return (
        <div>
            <AdminComponent></AdminComponent>
            <section>
            <A.Headline>문의 목록</A.Headline>
            <A.Toggle> 수정</A.Toggle>
            <A.Table>
            <thead>
                <tr>
                    <th>문의 유형</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                    <th>관리</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>회원관리</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>23.08.31</td>
                    <td>
                    <Link to="/admin/inquiryReply"> 답변하기 </Link>
                        <button>답변완료</button>
                    </td>
                </tr>
                <tr>
                    <td>회원관리</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>23.08.31</td>
                    <td>
                    <Link to="/admin/inquiryReply"> 답변하기 </Link>
                        <button>답변완료</button>
                    </td>
                </tr>
                <tr>
                    <td>회원관리</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>23.08.31</td>
                    <td>
                    <Link to="/admin/inquiryReply"> 답변하기 </Link>
                        <button>답변완료</button>
                    </td>
                </tr>
                </tbody>
            </A.Table>
            </section>
        </div>
    )
}

export default InquiryList;