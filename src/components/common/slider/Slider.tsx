import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@/components/common/slider/styles.css';
import main1 from '@/assets/img/main1.jpeg';
import main2 from '@/assets/img/main2.jpeg';
import main3 from '@/assets/img/main3.jpeg';
import moim1 from '@/assets/img/moim3.png';
import { Link } from 'react-router-dom';

export default function Slider() {
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
          <Link to="/contest">
            <img src={main3} alt="독서모임 이미지3" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/contest">
            <img src={moim1} alt="독서모임 이미지3" />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/contest">
            <img src={main1} alt="독서모임 이미지3" />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/contest">
            <img src={main2} alt="독서모임 이미지3" />
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
