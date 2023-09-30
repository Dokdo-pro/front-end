import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as GBW from '@/pages/group/groupboardwrite/GroupBoardWrite.styled';
import BoardWriteSection2 from '@/components/common/boardwritesection/BoardWriteSection2';
import Camera from '@/assets/icon/Camera.png';
import { useParams, useNavigate } from 'react-router-dom';

import GroupHeader from '@/components/layout/header/GroupHeader';
import { getCookie } from '@/helper/Cookie';

const PhotoAlbumWrite: React.FC = () => {
  const [responseMessage, setResponseMessage] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState<File[]>([]); // 이미지 파일 배열
  const [userData, setUserData] = useState<any>(null); // User data

  const { groupId } = useParams<{ groupId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const loginToken = getCookie('loginToken'); // Assuming getCookie is defined somewhere

    axios
      .get('/api/v1/auth/me', {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
        withCredentials: true,
      })
      .then(response => {
        if (response.status === 200) {
          setUserData(response.data.data.getUser);
        } else {
          window.location.href = '/signup'; // Simulating page navigation
        }
      })
      .catch(error => {
        console.error('myposts유저 정보 가져오기 에러:', error);
        window.location.href = '/'; // Simulating page navigation
      });
  }, []);

  const handleCreatePost = async () => {
    try {
      if (!userData) {
               alert('성공적으로 작성되었습니다!');

        return;
      }
      const uploadedImageNames = await uploadImages(); // Modified this line

      const payload = {
        title: title,
        content: content,
        images: uploadedImageNames, // Use the uploaded image names directly
      };

      const response = await axios.post(
        `/api/v1/group/${groupId}/albums`,
        payload,
        { withCredentials: true },
      );

      if (response.status === 200) {
            alert('성공적으로 작성되었습니다!');

        navigate(`/group/${groupId}/photo`);
      } else {
        setResponseMessage(`오류 발생: ${response.statusText}`);
      }
    } catch (error: any) {
      console.error('Error:', error);
      setResponseMessage(`요청 실패: ${error.message}`);
    }
  };

  const uploadImages = async () => {
    const uploadedImageNames: string[] = [];

    for (const imageFile of images) {
      try {
        const formData = new FormData();
        formData.append('img', imageFile, 'img'); // 'img'로 키 값을 설정

        const uploadResponse = await axios.post(
          `/api/v1/group/images`,
          formData,
          { withCredentials: true },
        );

        if (uploadResponse.data.error === null) {
          uploadedImageNames.push(uploadResponse.data.data[0]);
        } else {
          console.error('이미지 업로드 실패:', uploadResponse.data.error);
        }
      } catch (error) {
        console.error('이미지 업로드 에러:', error);
      }
    }

    return uploadedImageNames;
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setImages([...images, files[0]]);
    }
  };

  return (
    <GBW.Wrapper>
      <GBW.GroupHeader>
        <GroupHeader data={{ group: Number(groupId) }} />
      </GBW.GroupHeader>
      <BoardWriteSection2 />

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
          placeholder="게시글 내용은 1000자 이내로 작성해주세요"
          value={content}
          onChange={e => setContent(e.target.value)}
          rows={15}
          maxLength={1000}
        />
        {images.map((image, index) => (
          <GBW.UploadImage
            key={index}
            src={URL.createObjectURL(image)}
            alt="업로드된 이미지"
          />
        ))}
      </GBW.WriteBox>

      <GBW.ImgFileTitle>
        <div>사진 등록(선택)</div>
        <div>500MB 이하의 jpg, gif 파일만 3개까지 업로드 가능합니다</div>
        <div>{content.length}/1000자</div>
      </GBW.ImgFileTitle>
      <GBW.ImgUpload>
        <div>
          <GBW.CameraBox>
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </GBW.CameraBox>
        </div>
      </GBW.ImgUpload>
      <GBW.PostButton onClick={handleCreatePost}>포스트 작성</GBW.PostButton>
      <p>{responseMessage}</p>
    </GBW.Wrapper>
  );
};

export default PhotoAlbumWrite;
