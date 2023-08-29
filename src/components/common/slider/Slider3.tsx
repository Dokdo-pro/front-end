import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';
import MidleBoardBox from '../boardbox/MidleBoardBox';
import axios from 'axios';

// MidleBoardData 타입 임포트
import { MidleBoardData } from '../boardbox/MidleBoardBox'; // 파일 경로에 맞게 수정해야 합니다.

// 서버에서 인기 데이터를 가져오는 함수
async function fetchPopularData() {
  try {
    const response = await axios.get(
      'http://localhost:3001/api/v1/group?orderBy=popularity&limit=10',
    );
    return response.data.data;
  } catch {
    console.log('error');
    return [];
  }
}

export default function Slider3() {
  const [popularData, setPopularData] = useState<MidleBoardData[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchPopularData();
        setPopularData(data);
      } catch (error) {
        console.error('인기 데이터를 가져오는 중 에러 발생:', error);
      }
    }

    fetchData();
  }, []);

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
      {popularData.map((item, index) => (
        <SwiperSlide key={index}>
          {item.name && <MidleBoardBox data={item} />}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}