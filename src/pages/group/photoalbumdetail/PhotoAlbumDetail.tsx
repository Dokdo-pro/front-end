import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as PAD from '@/pages/group/photoalbumdetail/PhotoAlbumDetail.styled';
import { getCookie } from '@/helper/Cookie';
import { useParams } from 'react-router-dom';

interface PhotoDetailData {
  error: null | string;
  data: {
    post: {
      _id: string;
      title: string;
      content: string;
      images: string[];
      createdAt: string;
      updatedAt: string;
      post_id: number;
      __v: number;
    };
    user: {
      name: string;
      profilePic: string;
    };
  };
}

interface Comment {
  text: string;
  isDeleted: boolean;
  comment_id: number;
  createdAt: string;
}

interface PhotoDetailDataProps {
  data?: PhotoDetailData;
}

const PhotoDetail: React.FC<PhotoDetailDataProps> = ({ data }) => {
  const loginToken = getCookie('loginToken');

  const { groupId, postsId } = useParams<{
    groupId?: string;
    postsId?: string;
  }>();

  const group_Id = groupId ? parseInt(groupId, 10) : undefined;
  const post_Id = postsId ? parseInt(postsId, 10) : undefined;

  const [PhotoDetail, setPhotoDetail] = useState<PhotoDetailData | null>(
    data || null,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    if (group_Id && post_Id) {
      fetchPhotoDetail(group_Id, post_Id);
      fetchComments(group_Id, post_Id);
    }
  }, [loginToken, group_Id, post_Id]);

  const fetchPhotoDetail = async (gId: number, pId: number) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/group/${gId}/posts/${pId}`,
        {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
          withCredentials: true,
        },
      );

      if (response.status === 200) {
        setPhotoDetail(response.data);
      } else {
        console.error('Error fetching detail data:', response.status);
      }
    } catch (error) {
      console.error('Error fetching detail data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const postComment = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/v1/group/${group_Id}/posts/${post_Id}/comments`,
        { text: commentText },
        {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
          withCredentials: true,
        },
      );

      if (response.status === 200) {
        window.location.reload(); // 페이지를 새로고침
      } else {
        console.error('Error posting comment:', response.status);
      }
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  const fetchComments = async (gId: number, pId: number) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/group/${gId}/posts/${pId}/comments`,
        {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
          withCredentials: true,
        },
      );

      if (response.status === 200) {
        setComments(response.data.data);
      } else {
        console.error('Error fetching comments:', response.status);
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <PAD.Wrapper>
      <PAD.GroupBoardTitle>
        <div>{PhotoDetail?.data.post.title}</div>
      </PAD.GroupBoardTitle>
      <PAD.User>
        <PAD.ProfileImg></PAD.ProfileImg>
        <PAD.Desc>
          <PAD.DescDisplay>
            <div>{PhotoDetail?.data?.post.createdAt || 'Loading...'}</div>
            <PAD.EditButton>●●●</PAD.EditButton>
          </PAD.DescDisplay>
        </PAD.Desc>
      </PAD.User>
      <PAD.UserWriteBox>
        <div>{PhotoDetail?.data?.post.content || 'Loading...'}</div>
        <img
          src={`http://localhost:3000/api/v1/image/post/${PhotoDetail?.data?.post.images[0]}`}
          alt="게시된 이미지"
        />
      </PAD.UserWriteBox>
      <PAD.Button>
        <button>❤️ 좋아요 숫자</button>
        <button>공유하기</button>
      </PAD.Button>
      <PAD.Comment>
        {comments.map(comment => (
          <div key={comment.comment_id}>
            {!comment.isDeleted ? (
              <>
                <div>{comment.text}</div>
                <div>{comment.createdAt}</div>
              </>
            ) : (
              <div>Deleted Comment</div>
            )}
          </div>
        ))}
      </PAD.Comment>
      <PAD.CIWrapper>
        <PAD.CIDisplay>
          <PAD.CIInput>
            <input
              type="text"
              placeholder="댓글을 입력하세요."
              value={commentText}
              onChange={e => setCommentText(e.target.value)}
            />
          </PAD.CIInput>
          <PAD.CIButton>
            <button onClick={postComment}>등록</button>
          </PAD.CIButton>
        </PAD.CIDisplay>
      </PAD.CIWrapper>
    </PAD.Wrapper>
  );
};

export default PhotoDetail;
