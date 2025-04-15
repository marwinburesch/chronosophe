"use client";

import useFormattedNumber from "@days-old/hooks/useFormattedNumber";
import daysPassed from "@days-old/lib/daysPassed";

type DaysOldProps = {
  date: string;
};

const DaysOld: React.FC<DaysOldProps> = ({ date }) => {
  const { rounded } = daysPassed(date, 1);
  const formattedAge = useFormattedNumber(rounded.age);

  return (
    <>
      <div className="text-4xl py-6">You are</div>
      <div className="text-8xl font-bold">{formattedAge}</div>
      <div className="text-4xl py-6">days old!</div>
    </>
  );
};

export default DaysOld;
