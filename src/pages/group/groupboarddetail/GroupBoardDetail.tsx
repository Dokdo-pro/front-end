import React, { SyntheticEvent, useState, useEffect, useRef } from 'react';
import axios from 'axios';
import * as GBD from '@/pages/group/groupboarddetail/GroupBoaderDetail.styled';
import { getCookie } from '@/helper/Cookie';
import { useParams, useNavigate } from 'react-router-dom';
import UserImg from '@/assets/img/userbasicimg.png';
import ClipboardJS from 'clipboard';

interface GroupDetailData {
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

interface UserData {
  name: string;
  profilePic: string;
}

interface GroupBoardDetailDataProps {
  data?: GroupDetailData;
}

interface GroupNameData {
  data: {
    name: string;
  };
}

interface GroupNameProps {
  data?: GroupNameData;
}
interface GroupData {
  group_id: number;
  name: string;
  isRecruit: boolean;
  profile: string;
  leader: number;
  like: number;
  mem: Array<{
    _id: string;
    group_id: number;
    user_id: number;
    createdAt: string;
  }>;
  introduction: string;
  place: string;
  search: {
    _id: string;
    group_id: number;
    location: string;
    day: string;
    genre: string;
    age: string;
    __v: number;
  };
  tags: string[];
  error: any;
  createdAt: string;
}
const GroupBoardDetail: React.FC<
  GroupBoardDetailDataProps & GroupNameProps
> = ({ data }) => {
  const loginToken = getCookie('loginToken');
  const { groupId, postsId } = useParams<{
    groupId?: string;
    postsId?: string;
  }>();
  const group_Id = groupId ? parseInt(groupId, 10) : 0;
  const post_Id = postsId ? parseInt(postsId, 10) : 0;
  const [groupDetail, setGroupDetail] = useState<GroupDetailData | null>(
    data || null,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentsName, setCommentsName] = useState<UserData[]>([]);

  const [commentText, setCommentText] = useState('');
  const [replyText, setReplyText] = useState<string>('');
  const [groupName, setGroupName] = useState<string>('');
  const [likeCounter, setLikeCounter] = useState<number>(0);
  const [isLiked, setIsLiked] = useState(false);

  const [joinError, setJoinError] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [editedTitle, setEditedTitle] = useState<string>('');
  const [editedContent, setEditedContent] = useState<string>('');

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [groupData, setGroupData] = useState<GroupData | null>(null);
  const [images, setImages] = useState<File[]>([]); // 이미지 파일 배열

  const btnRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  function formatCreatedAt(createdAt: string | number | Date) {
    const date = new Date(createdAt);

    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${month}월 ${day}일`;
  }

  useEffect(() => {
    if (group_Id && post_Id) {
      fetchGroupDetail(group_Id, post_Id);
      fetchComments(group_Id, post_Id);
      fetchGroupName(group_Id);
      fetchLikeStatus(group_Id, post_Id);
    }
  }, [loginToken, group_Id, post_Id]);

  const fetchGroupDetail = async (gId: number, pId: number) => {
    try {
      const response = await axios.get(`/api/v1/group/${gId}/posts/${pId}`, {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
        withCredentials: true,
      });

      if (response.status === 200) {
        setGroupDetail(response.data);
      } else {
        console.error('Error fetching detail data:', response.status);
      }
    } catch (error) {
      console.error('Error fetching detail data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchGroupName = async (gId: number) => {
    try {
      const response = await axios.get(`/api/v1/group/${gId}`, {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
        withCredentials: true,
      });

      if (response.status === 200) {
        const groupData = response.data.data;
        if (groupData) {
          setGroupName(response.data.data.name);
        } else {
          console.error('Group data not found');
        }
      } else {
        console.error('Error fetching Name data:', response.status);
      }
    } catch (error) {
      console.error('Error fetching group name:', error);
      setGroupName('');
    } finally {
      setIsLoading(false);
    }
  };

  const postComment = async () => {
    try {
      const response = await axios.post(
        `/api/v1/group/${group_Id}/posts/${post_Id}/comments`,
        { text: commentText },
        {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
          withCredentials: true,
        },
      );

      if (response.status === 200) {
        fetchComments(group_Id, post_Id);
        setCommentText('');
      } else {
        alert('모임에 가입하고 댓글을 작성해주세요!');

        console.error('Error posting comment:', response.status);
      }
    } catch (error) {
      alert('모임에 가입하고 댓글을 작성해주세요!');

      console.error('Error posting comment:', error);
    }
  };

  const postReply = async (commentId: number) => {
    try {
      const response = await axios.post(
        `/api/v1/group/${group_Id}/posts/${post_Id}/comments/${commentId}/reply`,
        { text: replyText },
        {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
          withCredentials: true,
        },
      );
      if (response.status === 200) {
        // window.location.reload();
      } else {
        console.error('Error posting reply:', response.status);
      }
    } catch (error) {
      console.error('Error posting reply:', error);
    }
  };

  const fetchComments = async (gId: number, pId: number) => {
    try {
      const response = await axios.get(
        `/api/v1/group/${gId}/posts/${pId}/comments`,
        {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
          withCredentials: true,
        },
      );

      if (response.status === 200) {
        const commentsData = response.data.data;
        setComments(commentsData.map((comment: any) => comment.comments));
        setCommentsName(commentsData.map((comment: any) => comment.user));
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

  const deletePost = async () => {
    const confirmed = window.confirm('게시글을 삭제하시겠습니까?');

    if (!confirmed) {
      return;
    }

    try {
      const response = await axios.delete(
        `/api/v1/group/${group_Id}/posts/${post_Id}`,
        {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
          withCredentials: true,
        },
      );

      if (response.status === 200) {
        alert('게시글이 삭제되었습니다.');
        navigate(`/group/${groupId}/board`);
      } else {
        console.error('Error deleting post:', response.status);
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const fetchLikeStatus = async (group_Id: number, post_Id: number) => {
    try {
      const response = await axios.get(
        `/api/v1/group/${group_Id}/posts/${post_Id}/like`,
      );

      if (response.status === 200) {
        const likeCount = response.data.data.likeNum;
        const userLikedStatus = response.data.data.userLiked; // 가정: API 응답에서 userLiked 항목을 사용하여 사용자가 좋아요를 눌렀는지 확인

        setLikeCounter(likeCount);
        setIsLiked(userLikedStatus);
      } else {
        console.error('Error fetching like status:', response.status);
        console.log('API Response:', response.data);
      }
    } catch (error) {
      console.error('Error fetching like status:', error);
    }
  };

  const handleLikeBtn = async () => {
    try {
      const response = await axios.put(
        `/api/v1/group/${group_Id}/posts/${post_Id}/like`,
        {},
      );

      if (response.status === 200) {
        // fetchLikeStatus(group_Id, post_Id); // 다시 좋아요 상태를 가져옵니다.
      } else {
        console.error('Error liking/unliking post:', response.status);
      }
    } catch (error) {
      console.error('Error liking/unliking post:', error);
    }
  };

  const defaultUserImg = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = UserImg;
  };

  const openEditModal = () => {
    setEditedTitle(groupDetail?.data.post.title || '');
    setEditedContent(groupDetail?.data.post.content || '');
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const saveEditedPost = async () => {
    try {
      const response = await axios.put(
        `/api/v1/group/${group_Id}/posts/${post_Id}`,
        {
          title: editedTitle,
          content: editedContent,
          // images: [], // 이미지 정보를 여기에 추가 (이 부분을 주석 처리해야 합니다)
        },
        {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
          withCredentials: true,
        },
      );

      if (response.status === 200) {
        closeEditModal();
        // 수정된 게시글 내용을 업데이트하는 함수 호출
        updatePostContent(editedTitle, editedContent);
      } else {
        console.error('Error editing post:', response.status);
      }
    } catch (error) {
      console.error('Error editing post:', error);
    }
  };

  const updatePostContent = (editedTitle: string, editedContent: string) => {
    // 필요한 작업을 수행 (예: 화면에 수정된 내용 표시)
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];

    if (selectedFile) {
      const formData = new FormData();
      formData.append('img', selectedFile);

      try {
        const response = await axios.put(
          `/api/v1/group/${group_Id}/posts/${post_Id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${loginToken}`,
              'Content-Type': 'multipart/form-data',
            },
            withCredentials: true,
          },
        );

        if (response.status === 200) {
          // 이미지 업로드가 성공하면 서버에서 새 이미지의 정보를 반환합니다.
          const newImageInfo = response.data.data;
          // 이제 새 이미지 정보를 기존 이미지 배열에 추가합니다.
          if (groupDetail) {
            const updatedImages = [...groupDetail.data.post.images];
            updatedImages[0] = newImageInfo;

            setGroupDetail({
              ...groupDetail,
              data: {
                ...groupDetail.data,
                post: {
                  ...groupDetail.data.post,
                  images: updatedImages, // 업데이트된 이미지 배열을 설정
                },
              },
            });

            console.log('Image uploaded successfully.');
          }
        } else {
          console.error('Image upload failed:', response.status);
        }
      } catch (error) {
        console.error('Image upload error:', error);
      }
    }
  };

  const uploadSingleImage = async (imageFile: File) => {
    try {
      const formData = new FormData();
      formData.append('img', imageFile);

      const uploadResponse = await axios.put(
        `/api/v1/group/${group_Id}/posts/${post_Id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${loginToken}`,
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        },
      );

      if (uploadResponse.status === 200) {
        const uploadedImageName = uploadResponse.data.data;
        console.log('이미지 업로드 성공:', uploadedImageName);
        return uploadedImageName;
      } else {
        console.error('이미지 업로드 실패:', uploadResponse.data.error);
        return null;
      }
    } catch (error) {
      console.error('이미지 업로드 에러:', error);
      return null;
    }
  };

  const handleShareBtn = () => {
    const url = window.location.href;

    const clipboard = new ClipboardJS(btnRef.current!, {
      text: function (trigger) {
        return url;
      },
    });

    clipboard.on('success', function (e) {
      alert('현재 게시글이 복사되었습니다!');
      e.clearSelection();
      clipboard.destroy();
    });

    clipboard.on('error', function (e) {
      console.error('URL 복사에 실패했습니다!', e);
      clipboard.destroy();
    });

    btnRef.current!.click();
  };

  return (
    <GBD.Wrapper>
      <GBD.GroupBoardTitle>
        <div>{groupName} 🍀 모임의 게시글</div>
      </GBD.GroupBoardTitle>

      {showDropdown && (
        <GBD.EditBoardWrap>
          <GBD.DropdownContent>
            {/* <GBD.EditGroupSection>
              <GBD.EditGroupInfo onClick={openEditModal}>
                게시글 수정
              </GBD.EditGroupInfo>
            </GBD.EditGroupSection>
            <GBD.ProfileSection>
              <EditImage />
            </GBD.ProfileSection> */}
            <GBD.DeleteSection>
              <GBD.CustomFileInputLabel onClick={deletePost}>
                게시글 삭제하기
              </GBD.CustomFileInputLabel>
            </GBD.DeleteSection>
          </GBD.DropdownContent>
        </GBD.EditBoardWrap>
      )}
      <GBD.EditButton onClick={toggleDropdown}>●●●</GBD.EditButton>
      <GBD.User>
        <GBD.ProfileImg
          src={`/api/v1/image/profile/${groupDetail?.data.user.profilePic}`}
          alt=""
          onError={defaultUserImg}
        ></GBD.ProfileImg>
        <GBD.Desc>
          <GBD.DescDisplay>
            <GBD.UserName>{groupDetail?.data.user.name}</GBD.UserName>
            <GBD.MMDD>
              {formatCreatedAt(
                groupDetail?.data?.post.createdAt || 'Loading...',
              )}
            </GBD.MMDD>
          </GBD.DescDisplay>
        </GBD.Desc>
      </GBD.User>

      <GBD.UserWriteBox>
        <GBD.BoardTitle>
          {groupDetail?.data?.post.title || '게시글이 없습니다.'}
        </GBD.BoardTitle>
        <GBD.UserContent>
          {groupDetail?.data?.post.content || '게시글이 없습니다.'}
        </GBD.UserContent>
        {groupDetail?.data?.post.images &&
          groupDetail.data.post.images.length > 0 && (
            <img
              src={`/api/v1/image/post/${groupDetail.data.post.images[0]}`}
              alt="게시된 이미지"
            />
          )}
      </GBD.UserWriteBox>
      <GBD.Button>
        <button onClick={handleLikeBtn}>
          {isLiked ? `❤️ ${likeCounter} 취소` : `❤️ 좋아요`} {likeCounter}
        </button>
        <button ref={btnRef} onClick={handleShareBtn}>
          공유하기
        </button>
      </GBD.Button>
      <GBD.Comment>
        <GBD.CommentsTitle>
          댓글 <span> {comments.length}</span>
        </GBD.CommentsTitle>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={comment.comment_id}>
              {!comment.isDeleted ? (
                <GBD.CommentsList>
                  <GBD.ComentsBox>
                    <GBD.PFImg>
                      <img
                        src={`/api/v1/image/profile/${commentsName[index]?.profilePic}`}
                        alt="프사"
                        onError={defaultUserImg}
                      />
                    </GBD.PFImg>
                    <GBD.PFText>
                      <GBD.CommentUser>
                        {commentsName[index]?.name}
                      </GBD.CommentUser>
                      <GBD.CommentText>{comment.text}</GBD.CommentText>
                      <GBD.CommnetCreatedAt>
                        {formatCreatedAt(comment.createdAt)}
                      </GBD.CommnetCreatedAt>
                    </GBD.PFText>
                  </GBD.ComentsBox>
                </GBD.CommentsList>
              ) : (
                <div>Deleted Comment</div>
              )}
            </div>
          ))
        ) : (
          <GBD.NoCommentsText>댓글이 아직 없습니다.</GBD.NoCommentsText>
        )}
      </GBD.Comment>
      <GBD.CIWrapper>
        <GBD.CIDisplay>
          <GBD.CIInput>
            <input
              type="text"
              placeholder="댓글을 입력하세요."
              value={commentText}
              onChange={e => setCommentText(e.target.value)}
            />
          </GBD.CIInput>
          <GBD.CIButton>
            <button onClick={postComment}>등록</button>
          </GBD.CIButton>
        </GBD.CIDisplay>
      </GBD.CIWrapper>
    </GBD.Wrapper>
  );
};

export default GroupBoardDetail;
