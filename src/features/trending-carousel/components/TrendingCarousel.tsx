"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

import trending from "../data/trending";
import { PrevIcon } from "@/shared/graphics/PrevIcon";
import { NextIcon } from "@/shared/graphics/NextIcon";
import { TrendingCard } from "./TrendingCard";

export function TrendingCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="mt-[8.5rem] md:mt-[5rem]">
      <div>
        <div className="mb-16 flex items-center justify-between">
          <div>
            <h2 className="text-[2.5rem] font-normal text-[#1d293f]">
              Trending 2024
            </h2>
            <p className="mt-4 text-base font-normal text-[#546179]">
              Sost Brilliant reasons Entrada should be your one-stop-shop!
            </p>
          </div>

          <div className="inline-block">
            <button
              type="button"
              aria-label="Previous trending items"
              onClick={() => swiperRef.current?.slidePrev()}
              className="align-top"
            >
              <PrevIcon />
            </button>

            <button
              type="button"
              aria-label="Next trending items"
              onClick={() => swiperRef.current?.slideNext()}
              className="align-top"
            >
              <NextIcon />
            </button>
          </div>
        </div>

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={22}
          slidesPerView={1}
          loop
          modules={[Navigation]}
          breakpoints={{
            1024: {
              slidesPerView: 2,
              spaceBetween: 32,
            },
            1920: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
        >
          {trending.map((item) => (
            <SwiperSlide key={item.id}>
              <TrendingCard
                imageSrc={item.imgUrl}
                title={item.title}
                subtitle={item.activities}
                price={item.price}
                discount={item.discount}
                duration={item.duration}
                rating={item.rating}
                ratingCount={item.ratingCount}
                alt={item.alt}
                wishlist={item.wishlist}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
