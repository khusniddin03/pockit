import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../container/container";
import "./discover.scss";
import { Pagination } from "swiper/modules";
import { DISCOVER_DATA } from "./discover-data";
import DiscoverCard from "../discover-card/discover-card";

export default function Discover(): React.ReactElement {
  return (
    <section className="discover">
      <Container>
        <h3 className="discover__title">Discover Pockit</h3>
      </Container>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        modules={[Pagination]}
        grabCursor
        className="discover__swiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1279: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {DISCOVER_DATA?.map((discover, dIndex) => (
          <SwiperSlide className="discover__swiper-item" key={dIndex}>
            <DiscoverCard {...discover} />
            <p className="discover__bottom-text">{discover?.subtext}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <p className="discover__bottom-text mt-20">
        Pockit is a prepaid account, not a bank. Prepaid accounts are not
        covered by the Financial Services Compensation Scheme (FSCS).
      </p>
    </section>
  );
}
