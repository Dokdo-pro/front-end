import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';
import SlideImg1 from '../../../assets/img/인천독서토론예시이미지.png';
import BoardBox from '../boardbox/BoardBox';

export default function Slider() {
  return (
    <>
      <Swiper
        //@ts-ignore
        cssMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={SlideImg1} alt="토론이미지" />
        </SwiperSlide>
        <SwiperSlide>
        <BoardBox />
          <BoardBox />
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
}
