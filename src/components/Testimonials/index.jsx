import { testimonialsData as testimonials } from "@/utils/testimonials";
import { Testimonial } from "./Testimonial";
import "./Testimonials.css";
/* Import Swiper Core and required modules */
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
/* import Swiper Styles */
import "swiper/css";
import "swiper/css/pagination";
/* End of Swiper Import */

export const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      {SwiperCore.use([Autoplay])}
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        {/* DINAMIC GENERATING TESTIMONIALS */}

        {testimonials.map((item, index) => (
          <SwiperSlide className="testimonial" key={index}>
            <Testimonial item={item} />
          </SwiperSlide>
        ))}

        {/* END OF MAP */}
      </Swiper>
    </section>
  );
};
