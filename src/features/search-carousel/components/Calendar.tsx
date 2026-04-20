"use client";

import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import type { Dayjs } from "dayjs";

interface CalendarProps {
  label: string;
  date: Dayjs | null;
  setDate: (value: Dayjs | null) => void;
}

export function Calendar({ label, date, setDate }: CalendarProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={date}
        onChange={setDate}
        slotProps={{
          textField: {
            variant: "outlined",
            sx: {
              minWidth: 0,
              "& .MuiOutlinedInput-root": {
                paddingRight: 0,
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "& .MuiInputBase-input": {
                padding: "0.5rem 0.5rem 0.5rem 0rem",
                fontSize: "1.125rem",
                fontWeight: 400,
                lineHeight: "111.111%",
                color: "#99a3ad",
                textDecoration: "underline",
              },
              "& .MuiInputLabel-root": {
                fontSize: "1.125rem",
                fontWeight: 400,
                lineHeight: "111.111%",
                color: "#99a3ad",
                textDecoration: "underline",
                padding: "0.5rem 0.5rem 0.5rem 0rem",
                transform: "translate(0, 0) scale(1)",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#99a3ad",
              },
              "& .MuiInputLabel-shrink": {
                display: "none",
              },
              "& .MuiInputBase-input::placeholder": {
                color: "#99a3ad",
                opacity: 1,
                textDecoration: "underline",
              },
            },
          },
        }}
      />
    </LocalizationProvider>
  );
}
