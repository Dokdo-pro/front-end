import React from "react";
import * as A from './Admin.styled';


interface AdminPostProps {
    data?:{
        title: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        post_id: number;    
    };
}

function PostData({data}: AdminPostProps) {
    return (
        <tr>
            {data && (
                <td>{data.post_id}</td>
                )}
            {data && (
                <td>{data.title}</td>
                )}
            {data && (
                <td>{data.createdAt}</td>
                )}
                {data && (
                <td>{data.updatedAt}</td>
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

export default PostData;