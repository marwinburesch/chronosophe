import { RoundedInfo } from "@days-old/lib/types";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Calendar, PartyPopper, Timer } from "lucide-react";
import { Separator } from "./ui/separator";

type MilestoneCardProps = Readonly<RoundedInfo>;

const MilestoneCard: React.FC<MilestoneCardProps> = ({ age, date, diff }) => {
  if (diff === "0") {
    return null;
  }

  return (
    <Card className="relative">
      <CardHeader>
        <div className="grid place-content-between pb-1">
          <span className="inline-flex items-center gap-1">
            <Timer className="m-1 -rotate-[25deg] text-blue-500" size={18} />
            in
            <span className="text-2xl font-bold">{diff}</span> days
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="m-1 -rotate-[25deg] text-red-500" size={18} />
            on {date}
          </span>
        </div>
        <Separator orientation="horizontal" />
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 text-2xl">
          <PartyPopper className="text-orange-300" />
          You will be
          <span className="text-3xl font-bold">{age}</span> days old
        </div>
      </CardContent>
    </Card>
  );
};

export default MilestoneCard;
