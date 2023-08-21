import React, { useState } from 'react';
import * as GBW from './GroupBoardWrite.styled';

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
          placeholder="글은 여기에 써주세요~~~~"
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
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <div>{content.length}/1000자</div>
      </GBW.ImgUpload>
    </GBW.Wrapper>
  );
};

export default GroupBoardWrite;
