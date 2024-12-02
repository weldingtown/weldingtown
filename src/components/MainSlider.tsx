import b1 from '@/assets/img/banner/1.jpeg';
import b2 from '@/assets/img/banner/2.jpeg';
import Image from 'next/image';
import Slider from 'react-slick';
const bannerImgs = [b1, b2];

export default function MainSlider() {
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    arrows: true,
  };
  return (
    <Slider {...settings} className='overflow-hidden'>
      {bannerImgs.map((img, i) => (
        <Image
          src={img}
          className='w-full h-full'
          width={900}
          height={900}
          alt='Banner'
          key={i}
        />
      ))}
    </Slider>
  );
}
