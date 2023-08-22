import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';
import SlideImg1 from '../../../assets/img/인천독서토론예시이미지.png';
import MidleBoardBox from '../boardbox/MidleBoardBox';
import BookSlider from './BookSlider';

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
          </SwiperSlide>
          <SwiperSlide>
            <MidleBoardBox />
          </SwiperSlide>
          <SwiperSlide>
            <BookSlider />
          </SwiperSlide>
      </Swiper>
    </>
  );
}
