import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@/components/common/slider/5.styles.css';

import MiddleBoardBox2 from '@/components/common/boardbox/MiddleBoard2';

import axios from 'axios';
import { MiddleBoardData2 } from '@/components/common/boardbox/MiddleBoard2';

import { getCookie } from '@/helper/Cookie';

interface UserData {
  group: number[]; // group 필드는 숫자 배열로 정의
}

export default function Slider3() {
  const [popularData, setPopularData] = useState<MiddleBoardData2[]>([]);
  const [userData, setUserData] = useState<UserData | null>(null); // 초기에는 null로 설정

  useEffect(() => {
    const loginToken = getCookie('loginToken');

    axios
      .get('http://localhost:3000/api/v1/auth/me', {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
        withCredentials: true,
      })
      .then(response => {
        if (response.status === 200) {
          const userData: UserData = response.data.data;
          setUserData(userData);

          if (userData.group && userData.group.length > 0) {
            // 사용자의 그룹 데이터를 가져옵니다.
            fetchMyGroups(userData.group);
          }
        } else {
          console.error('사용자 데이터를 가져오지 못했습니다.');
        }
      })
      .catch(error => {
        console.error('사용자 데이터를 가져오는 중 에러 발생:', error);
      });
  }, []);

  const fetchMyGroups = async (groupIds: number[]) => {
    for (const groupId of groupIds) {
      try {
        const groupResponse = await axios.get(
          `http://localhost:3000/api/v1/group/${groupId}`,
        );

        if (groupResponse.data.error === null) {
          // 그룹 데이터 처리
          const groupInfo: MiddleBoardData2 = groupResponse.data.data;
          setPopularData(prevpopularData => [...prevpopularData, groupInfo]);
        } else {
          console.error(
            '그룹 슬라이드 가져오기 오류:',
            groupResponse.data.error,
          );
        }
      } catch (error) {
        console.error('그룹 슬라이드 가져오기 에러:', error);
      }
    }
  };

  return (
    <Swiper
      //@ts-ignore
      keyboard={true}
      mousewheel={true}
      cssMode={true}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="mySwiper"
    >
      {popularData.slice(0, 3).map((item, index) => (
        <SwiperSlide key={index}>
          {item.name && <MiddleBoardBox2 data={item} />}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
