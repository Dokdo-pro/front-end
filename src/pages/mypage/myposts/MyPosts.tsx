import React, { useEffect, useState } from 'react';
import * as MyPostsStyle from './MyPosts.styled';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../../helper/Cookie';
// import UserIcon from '../../../assets/img/userprofile.png';

interface PostData {
  _id: string;
  group_id: number;
  post_id: number;
  user_id: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}


interface PostBoxProps {
  data?: PostData;
}

function MyPostsComponent({ data }: PostBoxProps) {
  const navigate = useNavigate();
  const [myPosts, setMyPosts] = useState<PostData[]>([]);

  useEffect(() => {
    // 먼저 유저 정보를 가져옵니다.
    const loginToken = getCookie('loginToken'); // getCookie 함수로 'loginToken' 쿠키 값을 가져옵니다.

          axios
            .get(`http://localhost:3001/api/v1/auth/me/posts`,
            {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
        withCredentials: true,
      })
            .then(postsResponse => {
              if (postsResponse.data.error === null) {
                // 수정: 오류 확인
                const userPosts: PostData[] = postsResponse.data.data;
                setMyPosts(userPosts);
              } else {
                console.error(
                  '게시글 가져오기 오류:',
                  postsResponse.data.error,
                );
              }
            })
            .catch(error => {
              console.error('게시글 가져오기 에러:', error);
            });
      
  }, [navigate]);

  return (
    <MyPostsStyle.Container>
      <MyPostsStyle.Wrapper>
        {/* 좋아요한 모임 1개짜리 컴포넌트 */}
        <MyPostsStyle.GroupBoardList>
          {myPosts.map(post => (
            <MyPostsStyle.Boardbox key={post._id}>
              <MyPostsStyle.BoardLeft>
                <MyPostsStyle.ProfileData>
                  <MyPostsStyle.ProfileImg
                    src={post.createdAt}
                    alt="유저 프로필사진"
                  />
                  <MyPostsStyle.UpdatedProfile>
                    <MyPostsStyle.Writer>{post.user_id}</MyPostsStyle.Writer>
                    <MyPostsStyle.PostedDate>
                      {post.createdAt}
                    </MyPostsStyle.PostedDate>
                  </MyPostsStyle.UpdatedProfile>
                </MyPostsStyle.ProfileData>

                <MyPostsStyle.Content>{post.post_id}</MyPostsStyle.Content>
                <MyPostsStyle.GroupDes>
                  <MyPostsStyle.ContentLikes>
                    {post.__v}
                  </MyPostsStyle.ContentLikes>
                  <MyPostsStyle.ContentComment>
                    댓글 수
                  </MyPostsStyle.ContentComment>
                </MyPostsStyle.GroupDes>
              </MyPostsStyle.BoardLeft>
              <MyPostsStyle.BoardImg src="" alt="게시된 이미지" />
            </MyPostsStyle.Boardbox>
          ))}
        </MyPostsStyle.GroupBoardList>
      </MyPostsStyle.Wrapper>
    </MyPostsStyle.Container>
  );
}

export default MyPostsComponent;
