import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import * as BC from '@/pages/bookrec/BookRec.styled';

interface Book {
  title: string;
  author: string;
  pubDate: string;
  link: string;
  cover: string;
  description: string;
  isbn : string;
}

declare global {
  interface Window {
    handleJSONPResponse?: (data: any) => void;
  }
}

const BookRec = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const callbackName = 'handleJSONPResponse';

    const url = `http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=${process.env.REACT_APP_ALADIN_SECRET_KEY}&QueryType=Bestseller&MaxResults=20&start=1&SearchTarget=Book&output=js&Version=20131101&callback=${callbackName}`;

    // 기존의 콜백 함수를 백업
    const originalCallback = window[callbackName];

    window[callbackName] = data => {
      console.log('JSONP Response:', data);
      setBooks(data.item);

      // 요청 처리 후 원래의 콜백 함수로 복원 (만약 있었다면)
      if (originalCallback) {
        window[callbackName] = originalCallback;
      } else {
        delete window[callbackName];
      }
    };

    const script = document.createElement('script');
    script.src = url;
    document.head.appendChild(script);

    return () => {
      if (originalCallback) {
        window[callbackName] = originalCallback;
      } else {
        delete window[callbackName];
      }
      document.head.removeChild(script);
    };
  }, []);
  
   const handleBookClick = (isbn:string) => 
   navigate(`/bookrec/${isbn}`)

  return (
    <BC.Wrapper>
      <BC.Box>
        <BC.BoxTitleBox>
          <BC.BoxTitle>
            독도에서 추천하는
            <br /> 독서 토론 추천도서!
          </BC.BoxTitle>
        </BC.BoxTitleBox>
        <BC.SliederBox>
          <BC.Wrapper>
            {books.map((book, index) => (
              <BC.List key={index} onClick={() => handleBookClick(book.isbn)}>
                  <BC.ImgBox>
                    <BC.Img>
                      <img src={book.cover} alt="도서이미지" />
                    </BC.Img>
                    <BC.Info>
                      <div>{book.title}</div>
                      <div>{book.author}</div>
                      <div>{book.pubDate}</div>
                    </BC.Info>
                  </BC.ImgBox>
              </BC.List>
            ))}
          </BC.Wrapper>
        </BC.SliederBox>
      </BC.Box>
    </BC.Wrapper>
  );
};

export default BookRec;

