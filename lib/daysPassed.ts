import dayjs from "./dayjs";

/**
 * Calculate the number of days passed since a given date and return the next milestone date.
 * @param {string} dateString - The date string in "DDMMYYYY" format.
 * @param {number} roundTo - The number of days to round to.
 * @returns {object} An object containing the birthday date, rounded age, future date, and difference in days.
 */
export default function daysPassed(dateString: string, roundTo: number) {
  const date = dayjs.utc(dateString, "DDMMYYYY");
  const now = dayjs.utc();
  const daysPassed = now.diff(date, "day");

  const roundedValue = Math.ceil(daysPassed / roundTo) * roundTo;
  const diff = roundedValue - daysPassed;
  const futureDate = now.add(diff, "day").toDate();

  return {
    birthday: date.toDate(),
    rounded: {
      age: roundedValue,
      date: futureDate,
      diff: diff,
    },
  };
}
