import React, { useState } from 'react';
import axios from 'axios';
import * as GBW from './GroupBoardWrite.styled';
import BoardWriteSection from '../../../components/common/boardwritesection/BoardWriteSection';
import Camera from '../../../assets/icon/Camera.png';
import { useParams } from 'react-router-dom'; // useParams를 임포트
import GroupHeader from '../../../components/layout/header/GroupHeader';



const GroupBoardWrite: React.FC = () => {
  const [responseMessage, setResponseMessage] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState<string[]>([]);

  const { groupId } = useParams<{ groupId: string }>(); // useParams로 groupId 가져오기

  const handleCreatePost = async () => {
    const tokenCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('loginToken'));
    const loginToken = tokenCookie ? tokenCookie.split('=')[1] : undefined;

    if (!loginToken) {
      setResponseMessage('로그인 토큰이 없습니다. 다시 로그인해주세요.');
      return;
    }

    const payload = {
      title,
      content,
    };

    try {
      const response = await axios.post(
        `http://localhost:3001/api/v1/group/${groupId}/posts`, // 동적으로 생성된 URL 사용
        payload,
        { withCredentials: true },
      );

      if (response.status === 200) {
        setResponseMessage('성공적으로 작성되었습니다!');
      } else {
        setResponseMessage(`오류 발생: ${response.statusText}`);
      }
    } catch (error: any) {
      console.error('Error:', error);
      setResponseMessage(`요청 실패: ${error.message}`);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const imageUrl = URL.createObjectURL(file);
      setImages([...images, imageUrl]);
    }
  };

  return (
    <GBW.Wrapper>
      <GBW.GroupHeader>
        <GroupHeader data={{ group: Number(groupId) }} />
      </GBW.GroupHeader>

      <BoardWriteSection />


      <GBW.TitleWrite>
        <textarea
          placeholder="제목을 입력해주세요. (40자)"
          value={title}
          onChange={e => setTitle(e.target.value)}
          rows={2}
          maxLength={40}
        />
      </GBW.TitleWrite>



      <GBW.WriteBox>
        <textarea
          placeholder="하고있던건데 다 지우고 다시 하셔도 됩니다"
          value={content}
          onChange={e => setContent(e.target.value)}
          rows={15}
          maxLength={1000}
        />
        {images.map((image, index) => (
          <GBW.UploadImage key={index} src={image} alt="업로드된 이미지" />
        ))}
      </GBW.WriteBox>





      <GBW.ImgFileTitle>
        <div>사진  등록(선택)</div>
        <div>500MB 이하의 jpg, gif 파일만 3개까지 업로드 가능합니다</div>
      </GBW.ImgFileTitle>
      <GBW.ImgUpload>
        <div>
          <GBW.CameraBox>
            <img src={Camera} alt="" />
            </GBW.CameraBox>
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
        <div>{content.length}/1000자</div>
      </GBW.ImgUpload>
      <button onClick={handleCreatePost}>포스트 작성</button>
      <p>{responseMessage}</p>
    </GBW.Wrapper>
  );
};

export default GroupBoardWrite;
