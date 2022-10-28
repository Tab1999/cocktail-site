import React from "react";
import "swiper/swiper-bundle.min.css";
 import "swiper/swiper.min.css";
import  { Autoplay } from 'swiper';
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Slider.css";

SwiperCore.use([EffectCoverflow, Pagination]);
SwiperCore.use([Autoplay])
const slide_img = [
  "https://c0.wallpaperflare.com/preview/797/39/616/beverage-citrus-close-up-cocktail.jpg",
  "https://c1.wallpaperflare.com/preview/29/911/578/wine-glass-bar-orange.jpg",
  "https://c0.wallpaperflare.com/preview/986/455/761/cocktail-drink-topped-with-fruits-on-table-s-edge.jpg",
  "https://c4.wallpaperflare.com/wallpaper/528/736/10/ice-glasses-cocktail-drink-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/845/896/940/chocolate-strawberry-cocktail-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/189/1022/576/glass-beer-glass-alcohol-liquid-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/558/777/315/glass-food-drink-alcohol-wallpaper-preview.jpg",
  "https://c0.wallpaperflare.com/preview/1002/324/1/blue-margarita-filled-glass.jpg",
  "https://c4.wallpaperflare.com/wallpaper/414/643/577/cocktails-fruit-strawberries-cherries-wallpaper-preview.jpg",
];

export default function Slider() {
  return (<>
   {/* <h2>You can’t buy happiness, but you can prepare a cocktail. And that’s kind of the same thing.</h2> */}
   <div className="bg1">
      <Swiper
       autoplay={{ delay: 3000}}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        className="mySwiper"
      >
        
        {slide_img.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={img} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      </div>
      </>
  );
};
  