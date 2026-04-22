import { topDestinations } from "../data/top-destinations";
import { DestinationCard } from "./DestinationCard";

export function DestinationGrid() {
  return (
    <div
      className="
        mt-16 grid max-w-full grid-cols-1 gap-8
        lg:grid-cols-4 lg:grid-rows-8
        xl:grid-cols-7 xl:grid-rows-4
      "
    >
      {topDestinations.map((place, index) => {
        const cardClasses = [
          "bg-cover bg-center",
          index === 0
            ? "w-full aspect-[0.891/1] lg:[grid-area:1/1/3/3] lg:max-w-full xl:[grid-area:1/1/3/3] xl:h-[15.703125rem] xl:max-w-[17.625rem] 2xl:h-[20.9375rem] 2xl:max-w-[23.5rem]"
            : "",
          index === 1
            ? "w-full lg:[grid-area:3/1/5/3] lg:max-w-full xl:[grid-area:3/1/5/3] xl:h-[15.703125rem] xl:max-w-[17.625rem] 2xl:h-[20.9375rem] 2xl:max-w-[23.5rem]"
            : "",
          index === 2
            ? "w-full lg:[grid-area:1/3/5/5] lg:max-w-full xl:[grid-area:1/3/5/5] xl:h-[33.4rem] xl:max-w-[24rem] 2xl:h-[43.875rem] 2xl:max-w-[32rem]"
            : "",
          index === 3
            ? "w-full lg:[grid-area:5/1/7/5] lg:max-w-full xl:[grid-area:1/5/3/8] xl:h-[15.703125rem] xl:max-w-[30.375rem] 2xl:h-[20.9375rem] 2xl:max-w-[40.5rem]"
            : "",
          index === 4
            ? "w-full aspect-[0.891/1] lg:[grid-area:7/1/9/3] lg:w-full xl:[grid-area:3/5/5/6] xl:h-[15.703125rem] xl:w-[11.25rem] 2xl:h-[20.9375rem] 2xl:w-[15rem]"
            : "",
          index === 5
            ? "w-full aspect-[0.891/1] lg:[grid-area:7/3/9/5] lg:max-w-full xl:[grid-area:3/6/5/8] xl:h-[15.703125rem] xl:max-w-[17.625rem] 2xl:h-[20.9375rem] 2xl:max-w-[23.5rem]"
            : "",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <DestinationCard
            key={place.id}
            img_url={place.img_url}
            rating={place.rating}
            title={place.title}
            location={place.location}
            className={cardClasses}
            contentClassName="box-border flex h-full flex-grow flex-col justify-between p-4 2xl:p-8"
            titleClassName="font-normal text-white"
            subtitleClassName="font-light text-white"
          />
        );
      })}
    </div>
  );
}
