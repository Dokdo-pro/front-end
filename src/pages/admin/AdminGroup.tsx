import React from "react";
import * as A from "./Admin.styled";

function AdminGroup (){
    return (
        <div>
            <section>
            <A.MenuTop>
            <A.Headline>모임 목록</A.Headline>
            <A.Toggle>셀렉터</A.Toggle>
            </A.MenuTop>
            <A.Table>
            <thead>
                <tr>
                    <th>좋아요</th>
                    <th>모임명</th>
                    <th>모임장</th>
                    <th>구성원 수</th>
                    <th>관리</th>
                </tr>
            </thead>
                <tbody>
                <tr>
                    <td>44</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>12</td>
                    <td>
                        <button>수정</button>
                        <button>삭제</button>
                    </td>
                </tr>
                <tr>
                    <td>44</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>12</td>
                    <td>
                        <button>수정</button>
                        <button>삭제</button>
                    </td>
                </tr>
               </tbody> 
            </A.Table>        
        </section>
        </div>
    )

}

export default AdminGroup;