import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';
import BcBox5 from '../BookAndContestBox/BcBox5';
import BcBox6 from '../BookAndContestBox/BcBox6';
import BcBox7 from '../BookAndContestBox/BcBox7';
import BcBox8 from '../BookAndContestBox/BcBox8';

// 도서 추천 슬라이드에 사용할 컴포넌트
export default function Slider7() {
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
          <BcBox5 />
        </SwiperSlide>
        <SwiperSlide>
          <BcBox6 />
        </SwiperSlide>
        <SwiperSlide>
          <BcBox7 />
        </SwiperSlide>
        <SwiperSlide>
          <BcBox8 />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
