import React,{useState} from "react";
import axios from 'axios';
import * as A from './Admin.styled';

interface AdminPostData {
        title: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        post_id: number;    
}

interface AdminPostProps {
    data?:AdminPostData;
}

function PostData({data}: AdminPostProps) {

    const [deleted, setDeleted] = useState(false);

    async function handleDeletePost() {
        try{
            await axios.delete(`http://localhost:3001/api/v1/admin/posts/${data?.post_id}`);
            setDeleted(true);
        } catch (error) {
            throw error;
        }
    }
    
    if (!data){
        return null;
    }
    
    const {post_id, title, createdAt, updatedAt} = data;
    
    return (
        <tr>
            {data && (
                <td>{post_id}</td>
                )}
            {data && (
                <td>{title}</td>
                )}
            {data && (
                <td>{createdAt}</td>
                )}
                {data && (
                <td>{updatedAt}</td>
                )}
            {data && (
                <td>
                    <A.AdminButton>수정</A.AdminButton>
                    <A.AdminButton onClick={handleDeletePost}>삭제</A.AdminButton>
                    {deleted && <p>게시글이 삭제되었습니다.</p>}
                </td>
                )}
        </tr>
    );
}

export default PostData;