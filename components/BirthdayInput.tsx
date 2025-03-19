"use client";

import React, { useState, useRef } from "react";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

const BirthdayInput = () => {
  const [day, setDay] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const router = useRouter();

  const dayRef = useRef<HTMLInputElement>(null);
  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    nextRef: React.RefObject<HTMLInputElement | null>
  ) => {
    setValue(e.target.value);
    if (e.target.value.length === e.target.maxLength) {
      nextRef.current?.focus();
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
      <label className="text-5xl py-4">Enter your birthday</label>
      <div className="grid gap-2 justify-items-center grid-flow-col">
        <Input
          className="w-[3.25rem]"
          type="text"
          placeholder="DD"
          value={day}
          onChange={(e) => handleChange(e, setDay, monthRef)}
          maxLength={2}
          tabIndex={1}
          ref={dayRef}
        />
        <Input
          className="w-[3.25rem]"
          type="text"
          placeholder="MM"
          value={month}
          onChange={(e) => handleChange(e, setMonth, yearRef)}
          maxLength={2}
          ref={monthRef}
        />
        <Input
          className="w-[5rem]"
          type="text"
          placeholder="YYYY"
          value={year}
          onChange={(e) => handleChange(e, setYear, { current: null })}
          maxLength={4}
          ref={yearRef}
        />
      </div>
      <Button variant={"outline"} type="submit">
        <Send size={16} /> Submit
      </Button>
    </form>
  );
};

export default BirthdayInput;
