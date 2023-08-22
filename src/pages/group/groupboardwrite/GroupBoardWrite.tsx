import React, { useState } from 'react';
import * as GBW from './GroupBoardWrite.styled';
import BoardWriteSection from '../../../components/common/boardwritesection/BoardWriteSection';
import Camera from '../../../assets/icon/Camera.png';

const GroupBoardWrite = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState<string[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    //@ts-ignore
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImages([...images, imageUrl]);
    }
  };

  return (
    <GBW.Wrapper>
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
          placeholder="내용을 입력해주세요. (1000자)"
          value={content}
          onChange={e => setContent(e.target.value)}
          rows={15}
          maxLength={1000}
        />
        {images.map((image, index) => (
          <GBW.UploadImage key={index} src={image} alt="업로드된 이미지" />
        ))}
      </GBW.WriteBox>
      <GBW.ImgUpload>
        <div>
          <GBW.CameraBox>
          <GBW.CameraImg>
            <img src={Camera} alt="카메라 이미지" />
          </GBW.CameraImg>
          <GBW.CameraImg>
            <img src={Camera} alt="카메라 이미지" />
          </GBW.CameraImg>
          <GBW.CameraImg>
            <img src={Camera} alt="카메라 이미지" />
          </GBW.CameraImg>
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
    </GBW.Wrapper>
  );
};

export default GroupBoardWrite;
