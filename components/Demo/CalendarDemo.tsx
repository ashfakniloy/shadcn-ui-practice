"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="border rounded-md w-fit"
      />
      <p className="my-5">
        {`Selected date: ${date?.toLocaleString("en-US", {
          dateStyle: "long",
        })}`}
      </p>
    </>
  );
}
