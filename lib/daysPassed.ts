import dayjs from "dayjs";

export default function calculateDaysPassed(dateString: string) {
  const date = dayjs(dateString, "DDMMYYYY").utc();
  console.log(date);

  const now = dayjs().utc();
  const daysPassed = now.diff(date, "day");

  return daysPassed.toString();
}
