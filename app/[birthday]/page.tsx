import MilestoneCard from "@days-old/components/MilestoneCard";
import daysPassed from "@days-old/lib/daysPassed";

export default async function Page({
  params,
}: {
  params: Promise<{ birthday: string }>;
}) {
  const { birthday } = await params;
  const { original, roundedTo10, roundedTo100, roundedTo1000 } =
    daysPassed(birthday);
  return (
    <div className="grid place-items-center font-medium">
      <div className="text-4xl py-6">You are</div>
      <div className="text-8xl font-bold">{original}</div>
      <div className="text-4xl py-6">days old!</div>
      <div className="text-4xl py-6">Upcoming Milestones</div>
      <div className="flex flex-col gap-4">
        <MilestoneCard {...roundedTo10} />
        <MilestoneCard {...roundedTo100} />
        <MilestoneCard {...roundedTo1000} />
      </div>
    </div>
  );
}
