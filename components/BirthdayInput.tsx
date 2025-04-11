"use client";

import React, { useState, useRef } from "react";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Cake } from "lucide-react";
import dayjs from "@days-old/lib/dayjs";

const BirthdayInput = () => {
  const [day, setDay] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const router = useRouter();
  
  const currentYear = dayjs().year();

  const dayRef = useRef<HTMLInputElement>(null);
  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    nextRef: React.RefObject<HTMLInputElement | null>,
    maxLength: number
  ) => {
    const value = e.target.value;
    
    // Limit input length since maxLength doesn't work with type="number"
    if (value.length <= maxLength) {
      setValue(value);
      
      // Auto-focus next input when max length is reached
      if (value.length === maxLength && nextRef?.current) {
        nextRef.current.focus();
      }
    }
  };

  return (
    <form
      className="flex flex-col items-center gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/${day}${month}${year}`);
      }}
    >
      <label className="text-3xl md:text-5xl py-4">Enter your birthday</label>
      <div className="grid gap-2 justify-items-center grid-flow-col">
        <Input
          className="w-[3.25rem]"
          type="number"
          inputMode="numeric"
          placeholder="DD"
          value={day}
          onChange={(e) => handleChange(e, setDay, monthRef, 2)}
          min="1"
          max="31"
          tabIndex={1}
          ref={dayRef}
        />
        <Input
          className="w-[3.25rem]"
          type="number"
          inputMode="numeric"
          placeholder="MM"
          value={month}
          onChange={(e) => handleChange(e, setMonth, yearRef, 2)}
          min="1"
          max="12"
          ref={monthRef}
        />
        <Input
          className="w-[5rem]"
          type="number"
          inputMode="numeric"
          placeholder="YYYY"
          value={year}
          onChange={(e) => handleChange(e, setYear, { current: null }, 4)}
          min="1900"
          max={currentYear.toString()}
          ref={yearRef}
        />
      </div>
      <Button variant={"outline"} type="submit">
        <Cake size={16} /> Submit
      </Button>
    </form>
  );
};

export default BirthdayInput;
