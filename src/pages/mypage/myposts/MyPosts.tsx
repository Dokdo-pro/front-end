import React, { useEffect, useState } from 'react';
import * as MyPostsStyle from '@/pages/mypage/myposts/MyPosts.styled';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '@/helper/Cookie';

interface PostData {
  _id: string;
  group_id: number;
  post_id: number;
  user_id: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  content: string;
  images: string[];
}

interface UserData {
  name: string;
  profilePic: string;
}

function MyPostsComponent() {
  const navigate = useNavigate();
  const [myPosts, setMyPosts] = useState<PostData[]>([]);
  const [selectedPosts, setSelectedPosts] = useState<PostData[]>([]);
  const [userData, setUserData] = useState<UserData | null>(null);

  function formatCreatedAt(createdAt: string | number | Date) {
    const date = new Date(createdAt);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}년 ${month}월 ${day}일`;
  }

  useEffect(() => {
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
        console.error('myposts유저 정보 가져오기 에러:', error);
        navigate('/');
      });
  }, [navigate]);

useEffect(() => {
  const loginToken = getCookie('loginToken');
  axios
    .get(`http://localhost:3001/api/v1/auth/me/posts?&limit=5&offset=0`, {
      headers: {
        Authorization: `Bearer ${loginToken}`,
      },
      withCredentials: true,
    })
    .then(postsResponse => {
      if (postsResponse.data && Array.isArray(postsResponse.data)) {
        // 이 부분에서 데이터를 배열로 추출하고 setMyPosts에 할당합니다.
        const userPosts = postsResponse.data;
        setMyPosts(userPosts);
  
      } else {
        console.error('게시글 가져오기 오류:', postsResponse.data.error);
      }
    })
    .catch(error => {
      console.error('게시글 가져오기 에러:', error);
    });
}, []);

  useEffect(() => {
    const fetchAllPosts = async () => {
    const loginToken = getCookie('loginToken');

      const selectedPostsWithImages: PostData[] = [];
      console.log(myPosts);
if (myPosts.length === 0) {
 alert('작성한 글이 없습니다.');
   return;
}
      for (const post of myPosts) {
        try {
          const postResponse = await axios.get(
            `http://localhost:3001/api/v1/group/${post.group_id}/posts/${post.post_id}`,
            {
              headers: {
                Authorization: `Bearer ${loginToken}`,
              },
              withCredentials: true,
            },
          );

          if (postResponse.data.error === null) {
            const postData: PostData = {
              ...postResponse.data.data,
            };
            selectedPostsWithImages.push(postData);
          } else {
            console.error('포스트 가져오기 오류:', postResponse.data.error);
          }
        } catch (error) {
          console.error('포스트 가져오기 에러:', error);
        }
      }

      setSelectedPosts(selectedPostsWithImages);
    };

    fetchAllPosts();
  }, [myPosts]);

  return (
    <MyPostsStyle.Container>
      <MyPostsStyle.Wrapper>
        <MyPostsStyle.GroupBoardList>
          {userData &&
            selectedPosts.map(selectedPost => (
              <MyPostsStyle.Boardbox key={selectedPost._id}>
                <MyPostsStyle.BoardLeft>
                  <MyPostsStyle.ProfileData>
                    <MyPostsStyle.ProfileImg
                      src={`http://localhost:3001/api/v1/image/profile/${userData.profilePic}`}
                      alt={`${userData.name}의 프로필 사진`}
                    />
                    <MyPostsStyle.UpdatedProfile>
                      <MyPostsStyle.Writer>{userData.name}</MyPostsStyle.Writer>
                      <MyPostsStyle.PostedDate>
                        {formatCreatedAt(selectedPost.createdAt)}
                      </MyPostsStyle.PostedDate>
                    </MyPostsStyle.UpdatedProfile>
                  </MyPostsStyle.ProfileData>

                  <MyPostsStyle.Content>
                    {selectedPost.content}
                  </MyPostsStyle.Content>
                </MyPostsStyle.BoardLeft>
                <MyPostsStyle.BoardImg
                  src={`http://localhost:3001/api/v1/image/post/${selectedPost.images[0]}`}
                  alt="게시된 이미지"
                />
              </MyPostsStyle.Boardbox>
            ))}
        </MyPostsStyle.GroupBoardList>
      </MyPostsStyle.Wrapper>
    </MyPostsStyle.Container>
  );
}

export default MyPostsComponent;
