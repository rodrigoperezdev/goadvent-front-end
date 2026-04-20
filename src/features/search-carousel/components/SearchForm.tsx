"use client";

import { useState } from "react";
import type { Dayjs } from "dayjs";

import { SearchIcon } from "@/shared/graphics/SearchIcon";
import { LocationInput } from "./LocationInput";
import { DateInput } from "./DateInput";
import { ActivityInput } from "./ActivityInput";

export function SearchForm() {
  const [location, setLocation] = useState("");
  const [activity, setActivity] = useState("");
  const [date, setDate] = useState<Dayjs | null>(null);

  return (
    <div className="px-[0.7rem] sm:px-[1.5rem] xl:px-[3.5rem] 2xl:px-[5rem]">
      <div
        className="
          mt-[-9rem]
          flex flex-col rounded-[1rem] bg-white
          px-[2rem] pt-[1.7rem] pb-[1rem]
          shadow-[0px_43px_66px_0px_rgba(0,0,0,0.07)]
          lg:flex-wrap lg:p-[1rem]
          xl:flex-row xl:justify-between xl:px-[4rem] xl:py-[1.5rem]
          2xl:px-[5.19rem]
        "
      >
        <div
          className="
            flex w-full flex-col
            xl:w-[80%] xl:flex-row xl:flex-wrap xl:justify-between
            2xl:w-[70%] 2xl:flex-nowrap
          "
        >
          <div className="mb-4 w-full sm:w-full xl:w-auto">
            <LocationInput location={location} setLocation={setLocation} />
          </div>

          <div className="mb-4 w-full sm:w-full xl:w-auto">
            <ActivityInput activity={activity} setActivity={setActivity} />
          </div>

          <div className="mb-4 w-full sm:w-full xl:w-auto">
            <DateInput setDate={setDate} date={date} />
          </div>
        </div>

        <div className="flex w-full justify-start xl:w-[5rem] xl:justify-end">
          <button
            type="button"
            aria-label="Search"
            className="inline-flex items-center justify-end"
          >
            <SearchIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
