import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';
import MidleBoardBox from '../boardbox/MidleBoardBox';

// 미들 박스를 사용할 슬라이더
export default function Slider3() {
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
          <MidleBoardBox />
        </SwiperSlide>

        <SwiperSlide>
          <MidleBoardBox />
        </SwiperSlide>

        <SwiperSlide>
          <MidleBoardBox />
        </SwiperSlide>

        <SwiperSlide>
          <MidleBoardBox />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
