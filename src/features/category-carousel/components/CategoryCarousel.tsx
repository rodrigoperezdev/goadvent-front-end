"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

import { CategoryCard } from "./CategoryCard";
import activities from "../data/activities";
import { PrevIcon } from "@/shared/graphics/PrevIcon";
import { NextIcon } from "@/shared/graphics/NextIcon";

export function CategoryCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="mt-[8.5rem] md:mt-[5rem]">
      <div>
        <div className="mb-16 flex items-center justify-between">
          <div>
            <h2 className="text-[2.5rem] font-normal text-[#1d293f]">
              Select Category
            </h2>
            <p className="mt-4 text-base font-normal text-[#546179]">
              Sost Brilliant reasons Entrada should be your one-stop-shop!
            </p>
          </div>

          <div className="inline-block">
            <button
              type="button"
              aria-label="Previous categories"
              onClick={() => swiperRef.current?.slidePrev()}
              className="align-top"
            >
              <PrevIcon />
            </button>

            <button
              type="button"
              aria-label="Next categories"
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
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {activities.map((activity) => (
            <SwiperSlide key={activity.id}>
              <CategoryCard
                rating={activity.rating}
                imgUrl={activity.img_url}
                alt={activity.alt}
                title={activity.title}
                activitiesNumber={activity.activitiesNumber}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
