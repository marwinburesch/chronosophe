import dayjs from "./dayjs";
import { RoundedInfo } from "./types";
export default function daysPassed(dateString: string) {
  const date = dayjs.utc(dateString, "DDMMYYYY");
  console.log(date);

  const now = dayjs.utc();
  const daysPassed = now.diff(date, "day");

  const roundedTo10 = Math.ceil(daysPassed / 10) * 10;
  const roundedTo100 = Math.ceil(daysPassed / 100) * 100;
  const roundedTo1000 = Math.ceil(daysPassed / 1000) * 1000;

  const formatNumber = (num: number) =>
    new Intl.NumberFormat("en-DE").format(num);

  const createRoundedInfo = (roundedValue: number): RoundedInfo => {
    const diff = roundedValue - daysPassed;
    const futureDate = now.add(diff, "day").format("LL");
    return {
      age: formatNumber(roundedValue),
      date: futureDate,
      diff: formatNumber(diff),
    };
  };

  return {
    original: formatNumber(daysPassed),
    roundedTo10: createRoundedInfo(roundedTo10),
    roundedTo100: createRoundedInfo(roundedTo100),
    roundedTo1000: createRoundedInfo(roundedTo1000),
  };
}
