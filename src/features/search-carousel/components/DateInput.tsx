import type { Dayjs } from "dayjs";
import { Calendar } from "./Calendar";

interface DateInputProps {
  date: Dayjs | null;
  setDate: (value: Dayjs | null) => void;
}

export function DateInput({ date, setDate }: DateInputProps) {
  return (
    <div className="flex w-full flex-col justify-center sm:w-full xl:w-auto">
      <div>
        <h3 className="relative z-[1] mb-4 inline-block text-[1.75rem] font-normal leading-none text-[#1d293f] after:absolute after:bottom-[7px] after:left-0 after:-z-[1] after:h-[7px] after:w-full after:bg-[#f5a623] after:content-['']">
          Date
        </h3>
      </div>

      <div className="flex max-h-[36px] items-center justify-between sm:justify-between">
        <Calendar label="Set date" date={date} setDate={setDate} />
      </div>
    </div>
  );
}
