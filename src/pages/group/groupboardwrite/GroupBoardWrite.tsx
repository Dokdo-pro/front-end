import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as GBW from './GroupBoardWrite.styled';
import BoardWriteSection from '../../../components/common/boardwritesection/BoardWriteSection';
import Camera from '../../../assets/icon/Camera.png';
import { useParams } from 'react-router-dom';
import GroupHeader from '../../../components/layout/header/GroupHeader';
import { getCookie } from '../../../helper/Cookie';

const GroupBoardWrite: React.FC = () => {
  const [responseMessage, setResponseMessage] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState<File[]>([]); // 이미지 파일 배열
  const [userData, setUserData] = useState<any>(null); // User data

  const { groupId } = useParams<{ groupId: string }>();

  useEffect(() => {
    const loginToken = getCookie('loginToken'); // Assuming getCookie is defined somewhere

    axios
      .get('http://localhost:3001/api/v1/auth/me', {
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
        setResponseMessage('로그인이 필요합니다.');
        return;
      }
      const uploadedImageNames = await uploadImages(); // Modified this line

      const payload = {
        title: title,
        content: content,
        images: uploadedImageNames, // Use the uploaded image names directly
      };

      const response = await axios.post(
        `http://localhost:3001/api/v1/group/${groupId}/posts`,
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

  const uploadImages = async () => {
    const uploadedImageNames: string[] = [];

    for (const imageFile of images) {
      try {
        const formData = new FormData();
        formData.append('img', imageFile, 'img'); // 'img'로 키 값을 설정

        const uploadResponse = await axios.post(
          `http://localhost:3001/api/v1/group/images`,
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
