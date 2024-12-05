import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import bannerimg1 from '../../../assets/IMG-8661.webp'
import bannerimg2 from '../../../assets/IMG-8667.webp'
import Category from '../Category/Category';


const Banner = () => {
    return (
      <div className='flex'>
        <Category></Category>
         <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className='w-full mt-6 rounded-lg' src={bannerimg1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full mt-6 rounded-lg' src={bannerimg2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full mt-6 rounded-lg' src={bannerimg1} alt="" /></SwiperSlide>
      </Swiper>
    </>
      </div>
    );
};

export default Banner;