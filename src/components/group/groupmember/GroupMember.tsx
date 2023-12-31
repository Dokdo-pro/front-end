import React, { useState, useEffect, SyntheticEvent } from 'react';
import * as GDM from './GroupMember.styled';
import axios from 'axios';
import { getCookie } from '@/helper/Cookie';
import { useParams } from 'react-router-dom';
import userImg from '@/assets/img/userbasicimg.png';

interface Member {
  _id: string;
  group_id: number;
  user_id: number;
  createdAt: string;
  name: string;
  profile: string;
}

interface GroupData {
  group_id?: number;
  mem?: Member[];
}

interface UserInfo {
  user_id: number;
  name: string;
  profilePic: string;
  introduction: string;
}

function GroupMember() {
  const [groupData, setGroupData] = useState<GroupData | null>(null);
  const [membersInfo, setMembersInfo] = useState<UserInfo[]>([]);
  const loginToken = getCookie('loginToken');
  const { groupId } = useParams<{ groupId: string }>();

  useEffect(() => {
    async function fetchGroupData(group_id: number) {
      try {
        const response = await axios.get(`/api/v1/group/${group_id}`, {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
          withCredentials: true,
        });

        if (response.status === 200) {
          const members = response.data.data.mem;
          const usersInfoPromises = members.map((member: Member) =>
            fetchUserInfo(member.user_id),
          );
          const usersInfo = await Promise.all(usersInfoPromises);
          setGroupData(response.data.data);
          setMembersInfo(usersInfo.filter(info => info));
        } else {
          console.error('그룹 정보 가져오기 에러:', response.status);
        }
      } catch (error) {
        console.error('그룹 정보 가져오기 에러:', error);
      }
    }

    fetchGroupData(Number(groupId));
  }, [groupId]);

  async function fetchUserInfo(user_id: number): Promise<UserInfo | null> {
    try {
      const response = await axios.get(`/api/v1/auth/user/${user_id}`, {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
        withCredentials: true,
      });

      if (response.status === 200) {
        const { name, profilePic, introduction } = response.data.data;
        return {
          user_id,
          name,
          profilePic,
          introduction,
        };
      } else {
        console.error(
          '사용자 정보 가져오기 에러:',
          response.status,
          response.data,
        );
      }
    } catch (error) {
      console.error('사용자 정보 가져오기 에러:', error);
    }
    return null;
  }

  const defaultUserImg = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = userImg;
  };


  return (
    <div>
      <GDM.MemberBox>
        <GDM.Member>모임 멤버 ({membersInfo.length})</GDM.Member>
        <ul>
          {membersInfo.map(userInfo => (
            <li key={userInfo.user_id}>
              <GDM.MemberList>
                <GDM.MemberImg>
                    <img
                      src={`/api/v1/image/profile/${userInfo.profilePic}`}
                      alt=""
                      onError={defaultUserImg}
                    />
                </GDM.MemberImg>
                <GDM.Desc>
                  <div>{userInfo.name}</div>
                  <p>{userInfo.introduction}</p>
                </GDM.Desc>
              </GDM.MemberList>
            </li>
          ))}
        </ul>
      </GDM.MemberBox>
    </div>
  );
}

export default GroupMember;
