import { useMemo } from "react";

/**
 * Custom hook to format a number using Intl.NumberFormat.
 *
 * @param {number} number - The number to format.
 * @param {string} locale - The locale to use for formatting (default is "en-US").
 * @returns {string} - The formatted number.
 */
function useFormattedNumber(number: number, locale: string = "en-US"): string {
  return useMemo(() => {
    return new Intl.NumberFormat(locale).format(number);
  }, [number, locale]);
}

export default useFormattedNumber;
