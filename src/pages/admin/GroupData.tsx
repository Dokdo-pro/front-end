import React from "react";
import * as A from './Admin.styled';


interface AdminGroupProps {
    data?:{
        name: string;
        isRecruit: boolean;
        profile: string;
        maxMember: number;
        leadar: number;
        createdAt: string;
        group_id: number;
    };
}

function GroupData({data}: AdminGroupProps) {
    return (
        <tr>
        {data && (
            <td>{data.group_id}</td>
            )}
        {data && (    
            <td>{data.name}</td>
            )}
        {data && (
            <td>{data.leadar}</td>
            )}
        {data && (
            <td>{data.maxMember}</td>
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

export default GroupData;