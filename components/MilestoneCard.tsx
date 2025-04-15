"use client";

import { Card, CardContent, CardHeader } from "./ui/card";
import { Calendar, PartyPopper, Timer } from "lucide-react";
import { Separator } from "./ui/separator";
import daysPassed from "@days-old/lib/daysPassed";
import dayjs from "dayjs";
import useFormattedNumber from "@days-old/hooks/useFormattedNumber";

type MilestoneCardProps = {
  birthday: string;
  roundTo: number;
};

const MilestoneCard: React.FC<MilestoneCardProps> = ({ birthday, roundTo }) => {
  const { rounded } = daysPassed(birthday, roundTo);
  const formattedDiff = useFormattedNumber(rounded.diff);
  const formattedAge = useFormattedNumber(rounded.age);

  if (rounded.diff === 0) {
    return null;
  }

  return (
    <Card className="relative">
      <CardHeader>
        <div className="grid place-content-between pb-1">
          <span className="inline-flex items-center gap-1">
            <Timer className="m-1 -rotate-[25deg] text-blue-500" size={18} />
            in
            <span className="text-2xl font-bold">{formattedDiff}</span> days
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="m-1 -rotate-[25deg] text-red-500" size={18} />
            on {dayjs(rounded.date).format("LL")}
          </span>
        </div>
        <Separator orientation="horizontal" />
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 text-2xl">
          <PartyPopper className="text-orange-300" />
          You will be
          <span className="text-3xl font-bold">{formattedAge}</span> days old
        </div>
      </CardContent>
    </Card>
  );
};

export default MilestoneCard;
