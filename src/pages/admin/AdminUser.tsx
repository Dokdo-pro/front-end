import React, { useState, useEffect, useRef } from 'react';
import * as A from '@/pages/admin/Admin.styled';
import axios from 'axios';
import UserData from '@/pages/admin/UserData';

async function fetchAllUser() {
  try {
    const response = await axios.get(
      'http://localhost:3000/api/v1/admin/users',
    );
    return response.data.data;
  } catch (error) {
    throw error;
  }
}

function AdminUser() {
  const [userData, setUserData] = useState([]);
  const element = useRef<HTMLDivElement>(null);
  const onMoveBox = () => {
    element.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchAllUser();
        setUserData(data);
      } catch (error) {
        console.error('데이터를 가져오는 중 에러 발생:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <A.Wrapper>
      <A.Menu>
        <A.Headline>회원 정보 관리</A.Headline>
        <A.Total>총 {userData.length} 명</A.Total>
        <A.Layout>
          <div ref={element}></div>
          <A.Table>
            <tr>
              <th>닉네임</th>
              <th>이메일</th>
              <th>관리</th>
            </tr>

            {userData.map((email, name) => (
              <UserData key={name} data={email} />
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

export default AdminUser;
