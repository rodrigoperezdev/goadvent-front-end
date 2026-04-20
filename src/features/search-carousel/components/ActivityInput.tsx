import type { ChangeEvent } from "react";

import { ActivityIcon } from "@/shared/graphics/ActivityIcon";

interface ActivityInputProps {
  activity: string;
  setActivity: (value: string) => void;
}

export function ActivityInput({ activity, setActivity }: ActivityInputProps) {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setActivity(e.target.value);
  };

  return (
    <div className="flex w-full flex-col justify-center sm:w-full xl:w-auto">
      <div>
        <h3 className="relative z-[1] mb-4 inline-block text-[1.75rem] font-normal leading-none text-[#1d293f] after:absolute after:bottom-[7px] after:left-0 after:-z-[1] after:h-[7px] after:w-full after:bg-[#f5a623] after:content-['']">
          Activity
        </h3>
      </div>

      <div className="flex max-h-[36px] items-center justify-between">
        <input
          className="
            border-none p-[0.5rem_0.5rem_0.5rem_0rem]
            text-[1.125rem] font-normal leading-[111.111%]
            text-[#99a3ad] underline outline-none
            placeholder:text-[1.125rem] placeholder:font-normal
            placeholder:leading-[111.111%] placeholder:text-[#99a3ad]
            placeholder:underline
          "
          type="text"
          placeholder="Bungee Jump"
          name="activity"
          onChange={handleInputChange}
          value={activity}
        />

        <ActivityIcon />
      </div>
    </div>
  );
}
