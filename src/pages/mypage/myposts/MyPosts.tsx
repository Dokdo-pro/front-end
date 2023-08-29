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

interface UserData {
  name: any;
  profilePic: string;
}

function MyPostsComponent({ data }: PostBoxProps) {
  const navigate = useNavigate();
  const [myPosts, setMyPosts] = useState<PostData[]>([]);
  const [selectedPosts, setSelectedPosts] = useState<any[]>([]); // 추가: 선택된 포스트 정보를 저장할 상태
  const [userData, setUserData] = useState<UserData | null>(null); // 추가: 유저 정보 상태
  
   useEffect(() => {
     // 먼저 유저 정보를 가져옵니다.
     const loginToken = getCookie('loginToken');

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
           navigate('/signup');
         }
       })
       .catch(error => {
         console.error('유저 정보 가져오기 에러:', error);
         navigate('/');
       });
   }, []);

  useEffect(() => {
    // 먼저 유저 정보를 가져옵니다.
    const loginToken = getCookie('loginToken'); // getCookie 함수로 'loginToken' 쿠키 값을 가져옵니다.
    axios
      .get(`http://localhost:3001/api/v1/auth/me/posts`, {
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
          
          // 모든 포스트를 가져오기 위한 함수
          const fetchAllPosts = async () => {
            for (const post of userPosts) {
              try {
                const postResponse = await axios.get(
                  `http://localhost:3001/api/v1/group/${post.group_id}/posts/${post.post_id}`,
                );

                if (postResponse.data.error === null) {
                  // 포스트 정보 처리
                  const postData = {
                    ...postResponse.data.data,
                    // 여기에 원하는 추가 데이터를 저장할 수 있습니다.
                  };
                  setSelectedPosts(prevSelectedPosts => [
                    ...prevSelectedPosts,
                    postData,
                  ]);
                } else {
                  console.error(
                    '포스트 가져오기 오류:',
                    postResponse.data.error,
                  );
                }
              } catch (error) {
                console.error('포스트 가져오기 에러:', error);
              }
            }
          };

          // fetchAllPosts 함수 실행
          fetchAllPosts();
        } else {
          console.error('게시글 가져오기 오류:', postsResponse.data.error);
        }
      })
      .catch(error => {
        console.error('게시글 가져오기 에러:', error);
      });
  }, []);

  return (
    <MyPostsStyle.Container>
      <MyPostsStyle.Wrapper>
        <MyPostsStyle.GroupBoardList>
          {userData && selectedPosts.map(selectedPost => (
            <MyPostsStyle.Boardbox key={selectedPost._id}>
              <MyPostsStyle.BoardLeft>
                <MyPostsStyle.ProfileData>
                  <MyPostsStyle.ProfileImg
                    src={userData.profilePic}
                    alt={`${userData.name}의 프로필 사진`}
                  />
                  <MyPostsStyle.UpdatedProfile>
                    <MyPostsStyle.Writer>{userData.name}</MyPostsStyle.Writer>
                    <MyPostsStyle.PostedDate>
                      {selectedPost.createdAt}
                    </MyPostsStyle.PostedDate>
                  </MyPostsStyle.UpdatedProfile>
                </MyPostsStyle.ProfileData>

                <MyPostsStyle.Content>
                  {selectedPost.content}
                </MyPostsStyle.Content>
                <MyPostsStyle.GroupDes>
                  <MyPostsStyle.ContentLikes>
                    좋아요 수
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
