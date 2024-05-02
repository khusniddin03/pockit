import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import ArrowDown from "../arrow-down/arrow-down";
import ClientCard from "../client-card/client-card";
import { CLIENTS_DATA } from "../clients/clients-data";
import "./clients-list.scss";

export default function ClientsList(): React.ReactElement {
  return (
    <div className="clients-list">
      <div className="clients-list__btns">
        <button className="clients-list__prev-btn">
          <ArrowDown />
        </button>
        <button className="clients-list__next-btn">
          <ArrowDown />
        </button>
      </div>
      <div className="clients-list__wrap">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          modules={[Pagination, Navigation]}
          initialSlide={2}
          loop
          pagination
          navigation={{
            prevEl: ".clients-list__prev-btn",
            nextEl: ".clients-list__next-btn",
          }}
          grabCursor
          className="clients-list__swiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            767: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1023: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1279: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {CLIENTS_DATA?.map((client, dIndex) => (
            <SwiperSlide className="clients-list__swiper-item" key={dIndex}>
              <ClientCard {...client} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
