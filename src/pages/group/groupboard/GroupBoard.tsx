import React, { useState, useEffect } from 'react';
import * as GB from './GorupBoard.styled';
import SearchInput from '../../../components/common/searchinput/SearchInput';
import axios from 'axios';
import PenFooter from '../../../components/layout/footer/PenFooter';
import { getCookie } from '../../../helper/Cookie';
import GroupHeader from '../../../components/layout/header/GroupHeader';
import { useParams } from 'react-router-dom';

interface GroupItem {
  _id: string;
  group_id: number;
  post_id: number;
  user_id: number;
  createdAt: string;
  updateAt: string;
  content: string;
  image: string;
  likeNum: number;
}

interface UserDetails {
  name: string;
  profilePic: string;
}

interface PostDetails {
  title: string;
  content: string;
  images: string[];
}

function GroupBoard() {
  const [groupData, setGroupData] = useState<GroupItem[]>([]);
  const [likeCounts, setLikeCounts] = useState<{ [key: number]: number }>({});
  const [commentCounts, setCommentCounts] = useState<{ [key: number]: number }>(
    {},
  );
  const [userDetails, setUserDetails] = useState<{
    [key: number]: UserDetails;
  }>({});
  const [postDetails, setPostDetails] = useState<{
    [key: number]: PostDetails;
  }>({});

  const loginToken = getCookie('loginToken');
  const { groupId } = useParams<{ groupId: string }>();

  useEffect(() => {
    async function fetchData(groupId: number) {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/v1/group/${groupId}/posts`,
          {
            headers: {
              Authorization: `Bearer ${loginToken}`,
            },
            withCredentials: true,
          },
        );
        if (response.status === 200) {
          setGroupData(response.data.data);
          await fetchAdditionalData(response.data.data);
        } else {
          console.error('그룹 리스트 가져오기 에러:', response.status);
        }
      } catch (error) {
        console.error('그룹 정보 가져오기 에러:', error);
      }
    }

    fetchData(Number(groupId));
  }, [loginToken, groupId]);


  const [sortBy, setSortBy] = useState('like');

  function sortGroupData(groupData: GroupItem[]) {
    switch (sortBy) {
      case 'like':
        return groupData.sort((a, b) => likeCounts[b.post_id] - likeCounts[a.post_id]);
      case 'comment':
        return groupData.sort((a, b) => commentCounts[b.post_id] - commentCounts[a.post_id]);
      default:
        return groupData;
    }
  }





  async function fetchAdditionalData(groupData: GroupItem[]) {
    const promises = groupData.map(async item => {
      try {
        const [likeResponse, commentResponse, userResponse, postResponse] =
          await Promise.all([
            axios.get(
              `http://localhost:3001/api/v1/group/${item.group_id}/posts/${item.post_id}/like`,
              {
                headers: {
                  Authorization: `Bearer ${loginToken}`,
                },
                withCredentials: true,
              },
            ),
            axios.get(
              `http://localhost:3001/api/v1/group/${item.group_id}/posts/${item.post_id}/comments`,
              {
                headers: {
                  Authorization: `Bearer ${loginToken}`,
                },
                withCredentials: true,
              },
            ),
            axios.get(
              `http://localhost:3001/api/v1/auth/user/${item.user_id}`,
              {
                headers: {
                  Authorization: `Bearer ${loginToken}`,
                },
                withCredentials: true,
              },
            ),

            axios.get(
              `http://localhost:3001/api/v1/group/${item.group_id}/posts/${item.post_id}`,
              {
                headers: {
                  Authorization: `Bearer ${loginToken}`,
                },
                withCredentials: true,
              },
            ),
          ]);

        const likeNum = likeResponse.data.data.likeNum;
        const commentNum = commentResponse.data.data.length;
        const userName = userResponse.data.data.name;
        const userPic = userResponse.data.data.profilePic;
        const postTitle = postResponse.data.title;
        const postContent = postResponse.data.content;
        const postImages = postResponse.data.images;

        setLikeCounts(prevCounts => ({
          ...prevCounts,
          [item.post_id]: likeNum,
        }));
        setCommentCounts(prevCounts => ({
          ...prevCounts,
          [item.post_id]: commentNum,
        }));
        setUserDetails(prevDetails => ({
          ...prevDetails,
          [item.user_id]: { name: userName, profilePic: userPic },
        }));
        setPostDetails(prevDetails => ({
          ...prevDetails,
          [item.post_id]: {
            title: postTitle,
            content: postContent,
            images: postImages,
          },
        }));
      } catch (error) {
        console.error('추가 데이터 가져오기 에러:', error);
      }
    });

    await Promise.all(promises);
  }

  

  if (!groupData) {
    return <div>로딩 중...</div>;
  }

  return (
    <GB.Wrapper>
      <GroupHeader data={{ group: Number(groupId) }} />
      <PenFooter />
      <GB.InputDisplay>
        <SearchInput />
      </GB.InputDisplay>
      <GB.GroupBoardList>
        <GB.GroupBoardTitle>
          <div>모임명</div>
        </GB.GroupBoardTitle>
        {groupData.length === 0 ? (
          <div>게시글이 없습니다.</div>
        ) : (
          groupData.map((groupItem, index) => (
            <GB.Boardbox key={index}>
              <GB.BoardLeft>
                <div>유저 이름: {userDetails[groupItem.user_id]?.name}</div>
                <div>
                  유저 프로필:
                  <img
                    src={`/${userDetails[groupItem.user_id]?.profilePic}`}
                    alt="프로필 사진"
                  />
                </div>
                <div>{postDetails[groupItem.post_id]?.content}</div>
                <div>좋아요: {likeCounts[groupItem.post_id]}</div>
                <div>댓글 개수: {commentCounts[groupItem.post_id]}</div>
              </GB.BoardLeft>
              <GB.BoardImg>
                {/* 해당 그룹 아이템의 post_id를 이용하여 첫 번째 이미지 가져오기 */}
                <img
                  src={`/${postDetails[groupItem.post_id]?.images[0]}`}
                  alt="게시된 이미지"
                />
              </GB.BoardImg>
            </GB.Boardbox>
          ))
        )}
      </GB.GroupBoardList>
    </GB.Wrapper>
  );
}
export default GroupBoard;
