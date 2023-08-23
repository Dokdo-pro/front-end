import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';
import ImageBox from '../imagebox/ImageBox';

// 도서 장르 넣을 슬라이더
export default function Slider4() {
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
          <div className="ImageRow">
            {Array(8)
              .fill('')
              .map((v, i) => (
                <ImageBox key={i} />
              ))}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="ImageRow">
            {Array(8)
              .fill('')
              .map((v, i) => (
                <ImageBox key={i} />
              ))}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="ImageRow">
            {Array(8)
              .fill('')
              .map((v, i) => (
                <ImageBox key={i} />
              ))}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="ImageRow">
            {Array(8)
              .fill('')
              .map((v, i) => (
                <ImageBox key={i} />
              ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
