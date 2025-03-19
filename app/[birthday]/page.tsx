import daysPassed from "@days-old/lib/daysPassed";

export default async function Page({
  params,
}: {
  params: Promise<{ birthday: string }>;
}) {
  const { birthday } = await params;

  return (
    <div className="grid place-items-center font-medium">
      <div className="text-4xl py-6">
        {birthday === "22032021" ? "Wes is" : "You are"}
      </div>
      <div className="text-8xl font-bold">{daysPassed(birthday)}</div>
      <div className="text-4xl py-6">days old!</div>
    </div>
  );
}
