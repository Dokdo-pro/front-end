import React, { useState } from 'react';
import axios from 'axios';
import * as A from '@/pages/admin/Admin.styled';

interface AdminPostData {
    post : {
        _id: string;
        group_id: number;
        post_id: number; 
        user_id: number; 
        createdAt: string;
        updatedAt: string;
    },
    user : {
        name: string;
        profilePic: string; 
    }
    
}

interface AdminPostProps {
  data?: AdminPostData;
}

function PostData({ data }: AdminPostProps) {
  const [deleted, setDeleted] = useState(false);

  async function handleDeletePost() {
    try {
      await axios.delete(
        `http://localhost:3001/api/v1/admin/posts/${data?.post.post_id}`,
      );
      setDeleted(true);
    } catch (error) {
      throw error;
    }
    }
    
    if (!data) {
        return null;
      }

    const {
        post: { post_id, group_id, createdAt },
        user: { name },
    } = data;

    const utcDate = new Date(createdAt);
    const localDate = utcDate.toLocaleDateString();
    
    return (
        <tbody>
            <tr>
                {data && (
                    <td>{post_id}</td>
                    )}
                {data && (
                    <td>{group_id}</td>
                    )}
                {data && (
                    <td>{name}</td>
                    )}
                {data && (
                    <td>{localDate}</td>
                    )}
                {data && (
                    <td>
                        <A.AdminButton onClick={handleDeletePost}>삭제</A.AdminButton>
                        {deleted && <></>}
                    </td>
                    )}
            </tr>
        </tbody>
    );
}

export default PostData;