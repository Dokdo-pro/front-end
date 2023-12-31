import React, { useState } from 'react';
import axios from 'axios';
import * as A from '@/pages/admin/Admin.styled';

interface AdminAlbumData {
  album: {
    _id: string;
    group_id: number;
    post_id: number;
    user_id: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  user: {
    name: string;
    profilePic: string;
  };
}

interface AdminAlbumProps {
  data?: AdminAlbumData;
}

function AlbumData({ data }: AdminAlbumProps) {
  const [deleted, setDeleted] = useState(false);

  async function handleDeleteAlbum() {
    try {
      await axios.delete(`/api/v1/admin/albums/${data?.album.post_id}`);
      alert("삭제가 완료되었습니다.");
      setDeleted(true);
      window.location.reload();
    } catch (error) {
      throw error;
    }
  }

  if (!data) {
    return null;
  }

  const {
    album: { post_id, group_id, createdAt },
    user: { name },
  } = data;

  const utcDate = new Date(createdAt);
  const localDate = utcDate.toLocaleDateString();

  return (
    <tbody>
      <tr>
        {data && <td>{post_id}</td>}
        {data && <td>{group_id}</td>}
        {data && <td>{name}</td>}
        {data && <td>{localDate}</td>}
        {data && (
          <td>
            <A.AdminButton onClick={handleDeleteAlbum}>삭제</A.AdminButton>
            {deleted && <></>}
          </td>
        )}
      </tr>
    </tbody>
  );
}

export default AlbumData;
