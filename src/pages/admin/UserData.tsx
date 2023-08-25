import React from "react";
import * as A from './Admin.styled';


interface AdminUserProps {
    data?:{
        name: string;
        email: string;
        user_id: string;    
    };
}

function UserData({data}: AdminUserProps) {

    return (
        <tr>
            {data && (
                <td>{data.name}</td>
                )}
            {data && (
                <td>{data.email}</td>
                )}
            {data && (
                <td>
                    <A.AdminButton>수정</A.AdminButton>
                    <A.AdminButton>삭제</A.AdminButton>
                </td>
                )}
            </tr>
    )
}

export default UserData;