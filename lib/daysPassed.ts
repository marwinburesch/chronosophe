import dayjs from "./dayjs";
export default function daysPassed(
  dateString: string,
  locale: string = "en-US"
) {
  const date = dayjs.utc(dateString, "DDMMYYYY");
  console.log(date);

  const now = dayjs.utc();
  const daysPassed = now.diff(date, "day");

  const formattedDaysPassed = new Intl.NumberFormat(locale).format(daysPassed);

  return formattedDaysPassed;
}
