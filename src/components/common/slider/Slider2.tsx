import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';

import BookRecBox from '../boardbox/BookRecBox';
// 도서 추천 슬라이드에 사용할 컴포넌트
export default function Slider2() {
  return (
    <>
      <Swiper
        //@ts-ignore
        keyboard={true}
        mousewheel={true}
        cssMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <BookRecBox />
        </SwiperSlide>

        <SwiperSlide>
          <BookRecBox />
        </SwiperSlide>

        <SwiperSlide>
          <BookRecBox />
        </SwiperSlide>

        <SwiperSlide>
          <BookRecBox />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
