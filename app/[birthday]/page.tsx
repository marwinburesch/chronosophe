import MilestoneCard from "@days-old/components/MilestoneCard";
import daysPassed from "@days-old/lib/daysPassed";
import DaysOld from "@days-old/components/DaysOld";

export default async function Page({
  params,
}: {
  params: Promise<{ birthday: string }>;
}) {
  const { birthday } = await params;

  return (
    <div className="grid place-items-center font-medium">
      <DaysOld date={birthday} />
      <div className="text-4xl py-6">Upcoming Milestones</div>
      <div className="flex flex-col gap-4">
        <MilestoneCard birthday={birthday} roundTo={10} />
        <MilestoneCard birthday={birthday} roundTo={100} />
        <MilestoneCard birthday={birthday} roundTo={1000} />
      </div>
    </div>
  );
}
