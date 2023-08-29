import React, { useState, useEffect } from 'react';
import * as PA from './PhotoAlbum.styled';
import SearchInput from '../../../components/common/searchinput/SearchInput';
import axios from 'axios';
import PenFooter from '../../../components/layout/footer/PenFooter';
import { getCookie } from '../../../helper/Cookie';
import { useParams } from 'react-router-dom';
import GroupHeader from '../../../components/layout/header/GroupHeader';

interface PhotoItem {
  _id: string;
  group_id: number;
  post_id: number;
  user_id: number;
  createdAt: string;
  updateAt: string;
  image: string;
}

function PhotoAlbum() {
  const [photoData, setPhotoData] = useState<PhotoItem[]>([]);

  const loginToken = getCookie('loginToken');
  const { groupId } = useParams<{ groupId: string }>();

  useEffect(() => {
    async function fetchPhotoData(groupId: number) {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/v1/group/${groupId}/albums`,
          {
            headers: {
              Authorization: `Bearer ${loginToken}`,
            },
            withCredentials: true,
          },
        );
        if (response.status === 200) {
          setPhotoData(response.data.data);
        } else {
          console.error('모임 사진첩 가져오기 에러:', response.status);
        }
      } catch (error) {
        console.error('모임 사진첩 정보 가져오기 에러:', error);
      }
    }
    fetchPhotoData(Number(groupId));
  }, [loginToken, groupId]);

  if (!photoData) {
    return <div>로딩 중...</div>;
  }

  return (
    <PA.Wrapper>
  <GroupHeader data={{ group: Number(groupId) }} />
  <PenFooter />
  <PA.InputDisplay>
    <SearchInput />
  </PA.InputDisplay>
  <PA.GroupPhotoTitle>모임 사진첩</PA.GroupPhotoTitle>

  <PA.PhotoList>
    <ul>
      {photoData.length === 0 ? (
        <div>
          
          
          사진이 없습니다.
          
          
          
          </div>
      ) : (
        photoData.map((photoItem, index) => (
          <li key={index}>
            <PA.PhotoBoardBox>
              <PA.PhotoImg>
                <img src={photoItem.image} alt="업로드사진" />
              </PA.PhotoImg>
              <PA.PhotoBoxBottom>
                <PA.PhotoBoardTitle>{photoItem.createdAt}</PA.PhotoBoardTitle>
                <PA.Profile>
                  <PA.ProfileImg>
                    <img src={photoItem.image} alt="프로필" />
                  </PA.ProfileImg>
                  <div>{photoItem.user_id}</div>
                </PA.Profile>
              </PA.PhotoBoxBottom>
            </PA.PhotoBoardBox>
          </li>
        ))
      )}
    </ul>
  </PA.PhotoList>
</PA.Wrapper>
  );
}

export default PhotoAlbum;
