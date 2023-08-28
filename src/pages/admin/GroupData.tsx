import React from "react";
import * as A from './Admin.styled';

interface AdminGroupData {
    group_id: number;    
    name: string;
    isRecruit: boolean;
    profile: string;
    introduction: string;
    place: string;
    createdAt: string;
    tags: string;
    search: string;
    location: string;
    day: string;
    genre: string;
    age: string;
}

interface AdminGroupProps {
    data?:AdminGroupData;
}

function GroupData({data}: AdminGroupProps) {
    
    if (!data){
        return null;
    }
    
    const {group_id, name, place, createdAt} = data;

    return (
        <tr>
        {data && (
            <td>{group_id}</td>
            )}
        {data && (    
            <td>{name}</td>
            )}
        {data && (
            <td>{place}</td>
            )}
        {data && (
            <td>{createdAt}</td>
            )}
        {data && (
            <td>
            <A.AdminButton>수정</A.AdminButton>
            <A.AdminButton>삭제</A.AdminButton>
            </td>
            )}
        </tr>
    );
}

export default GroupData;