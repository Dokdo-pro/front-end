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
  title: string;
  content: string;
  images: string[];
  posts: string[];
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
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  function formatCreatedAt(createdAt: string | number | Date) {
    const date = new Date(createdAt);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}월 ${day}일`;
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
    setLoading(true);

    axios
      .get(
        `http://localhost:3001/api/v1/auth/me/posts?limit=10&offset=${offset}`,
        {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
          withCredentials: true,
        },
      )
      .then(postsResponse => {
        if (postsResponse.data.error === null) {
          const userPosts: PostData[] = postsResponse.data.data.posts;

          // 'posts' 배열을 추출하여 선택된 게시물로 설정
          setMyPosts(userPosts);

          const fetchAllPosts = async () => {
            const selectedPostsWithImages: PostData[] = [];

            for (const post of userPosts) {
              try {
                const postResponse = await axios.get(
                  `http://localhost:3001/api/v1/group/${post.group_id}/posts/${post.post_id}`,
                );

                if (postResponse.data.error === null) {
                  const postData: PostData = {
                    ...postResponse.data.data.post,
                  };
                  selectedPostsWithImages.push(postData);
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

            setSelectedPosts(prevPosts => [
              ...prevPosts,
              ...selectedPostsWithImages,
            ]);
            setLoading(false);
          };

          fetchAllPosts();
        } else {
          console.error('게시글 가져오기 오류:', postsResponse.data.error);
        }
      })
      .catch(error => {
        console.error('게시글 가져오기 에러:', error);
      });
  }, [offset]);



  // 스크롤 이벤트 감지 함수
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (windowHeight + scrollTop >= documentHeight - 100 && !loading) {
      // 스크롤이 가장 아래로 도달하면 추가 데이터를 로드합니다.
      setOffset(prevOffset => prevOffset + 5);
    }
  };


  // 스크롤 이벤트 리스너 등록
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <MyPostsStyle.Container>
      <MyPostsStyle.Wrapper>
        <MyPostsStyle.GroupBoardList>
          {userData && 
            selectedPosts.map((selectedPost, index) => (
              <MyPostsStyle.BoardWrap>
                <MyPostsStyle.Boardbox key={selectedPost._id || index}>
                  <MyPostsStyle.BoardLeft>
                    <MyPostsStyle.ProfileData>
                      <MyPostsStyle.ProfileImg
                        src={`http://localhost:3001/api/v1/image/profile/${userData.profilePic}`}
                        alt={`${userData.name}의 프로필 사진`}
                      />
                      <MyPostsStyle.UpdatedProfile>
                        <MyPostsStyle.Writer>
                          {userData.name}
                        </MyPostsStyle.Writer>
                        <MyPostsStyle.PostedDate>
                          {formatCreatedAt(selectedPost.createdAt)}
                        </MyPostsStyle.PostedDate>
                      </MyPostsStyle.UpdatedProfile>
                    </MyPostsStyle.ProfileData>
                    <MyPostsStyle.Title>
                      {selectedPost.title}
                    </MyPostsStyle.Title>
                    <MyPostsStyle.Content>
                      {selectedPost.content}
                    </MyPostsStyle.Content>
                  </MyPostsStyle.BoardLeft>
                  <MyPostsStyle.BoardImg
                    src={`http://localhost:3001/api/v1/image/post/${selectedPost.images[0]}`}
                    alt="게시된 이미지"
                  />
                </MyPostsStyle.Boardbox>
              </MyPostsStyle.BoardWrap>
            ))}
        </MyPostsStyle.GroupBoardList>
      </MyPostsStyle.Wrapper>
    </MyPostsStyle.Container>
  );
}

export default MyPostsComponent;
