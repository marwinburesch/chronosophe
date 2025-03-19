import daysPassed from "@days-old/lib/daysPassed";

export default async function Page({
  params,
}: {
  params: Promise<{ birthday: string }>;
}) {
  const { birthday } = await params;
  const { original, roundedTo100 } = daysPassed(birthday);
  const youAre = birthday === "22032021" ? "Wes is" : "You are";
  return (
    <div className="grid place-items-center font-medium">
      <div className="text-4xl py-6">{youAre}</div>
      <div className="text-8xl font-bold">{original}</div>
      <div className="text-4xl py-6">days old!</div>
      <div className="text-4xl py-6">Upcoming Milestones</div>
      <div className="text-2xl">on {roundedTo100.date}</div>
      <div className="text-2xl">{`In ${roundedTo100.diff} days ${youAre} ${roundedTo100.age} days old`}</div>
    </div>
  );
}
