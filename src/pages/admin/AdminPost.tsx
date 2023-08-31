import React, { useState, useEffect, useRef } from 'react';
import * as A from '@/pages/admin/Admin.styled';
import axios from 'axios';
import PostData from '@/pages/admin/PostData';

async function fetchAllPost() {
  try {
    const response = await axios.get(
      'http://localhost:3000/api/v1/admin/posts',
    );
    return response.data.data; // 서버 응답에서 실제 그룹 데이터를 반환
  } catch (error) {
    throw error;
  }
}

function AdminPost() {
  const [postData, setPostData] = useState([]);
  const element = useRef<HTMLDivElement>(null);
  const onMoveBox = () => {
    element.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchAllPost();
        setPostData(data);
      } catch (error) {
        console.error('데이터를 가져오는 중 에러 발생:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <A.Wrapper>
      <A.Menu>
        <A.Top>
          <A.Headline> 회원 게시글 관리</A.Headline>
          <A.Select>
            <option value="groupboard">토론 모임 공고</option>
            <option value="freeboard">자유 게시글</option>
          </A.Select>
        </A.Top>
        <A.Layout>
          <div ref={element}></div>
          <A.Table>
            <tr>
              <th>글 번호</th>
              <th>제목</th>
              <th>생성 일자</th>
              <th>업데이트 일자</th>
              <th>관리</th>
            </tr>

            {postData.map((content, post_id) => (
              <PostData key={post_id} data={content} />
            ))}
          </A.Table>
        </A.Layout>
        <A.TopConteiner>
          <A.ScrollToTop onClick={onMoveBox}>Top</A.ScrollToTop>
        </A.TopConteiner>
      </A.Menu>
    </A.Wrapper>
  );
}

export default AdminPost;
