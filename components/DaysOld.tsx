"use client";

import daysPassed from "@days-old/lib/daysPassed";
import AnimatedNumber from "./AnimatedNumber";
import { useEffect, useState } from "react";

type DaysOldProps = {
  date: string;
};

const DaysOld: React.FC<DaysOldProps> = ({ date }) => {
const [days, setDays] = useState(0);
  const { rounded } = daysPassed(date, 1);

useEffect(() => {
    setDays(rounded.age);
  }
, [rounded.age]);

  return (
    <>
      <div className="text-4xl py-6">You are</div>
      <div className="text-8xl font-bold"><AnimatedNumber value={days} /></div>
      <div className="text-4xl py-6">days old!</div>
    </>
  );
};

export default DaysOld;
