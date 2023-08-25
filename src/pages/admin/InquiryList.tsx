import React from "react";
import * as S from './SideBar.styled';
import * as A from './Admin.styled';

function InquiryList(){
    return (
        <A.Wrapper>
            <A.Menu>
            <A.Top>
                <A.Headline>문의사항</A.Headline>
                <A.Select> 문의유형 
                    <option value="불량유저 신고">불량유저 신고</option>
                    <option value="서비스 관련">서비스 관련</option> 
                    <option value="테스트 관련">테스트 관련</option>
                </A.Select>
            </A.Top>
            <A.Layout>
            <A.Table>
                <tr>
                    <th>문의 유형</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                    <th>관리</th>
                </tr>
                <tr>
                    <td>불량유저 신고</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>23.08.31</td>
                    <td>
                        <A.ReplyButton><S.ReplyLink to="/admin/inquiryReply">대기</S.ReplyLink></A.ReplyButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
                <tr>
                    <td>서비스 관련</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>23.08.31</td>
                    <td>
                        <A.ReplyButton><S.ReplyLink to="/admin/inquiryReply">대기</S.ReplyLink></A.ReplyButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
                <tr>
                    <td>테스트 관련</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>23.08.31</td>
                    <td>
                        <A.ReplyButton><S.ReplyLink to="/admin/inquiryReply">대기</S.ReplyLink></A.ReplyButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
                <tr>
                    <td>서비스 관련</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>23.08.31</td>
                    <td>
                        <A.CheckButton>완료</A.CheckButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
                <tr>
                    <td>테스트 관련</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>23.08.31</td>
                    <td>
                        <A.CheckButton>완료</A.CheckButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
                <tr>
                    <td>불량유저 신고</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>23.08.31</td>
                    <td>
                        <A.CheckButton>완료</A.CheckButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
            </A.Table>
            </A.Layout>
            </A.Menu>
        </A.Wrapper>
    )
}
export default InquiryList;
