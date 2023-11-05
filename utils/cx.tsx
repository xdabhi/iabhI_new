import { compareDesc, parseISO } from "date-fns";

export const cx = (...classNames: string[]) => classNames.filter(Boolean).join(" ")
export default cx;

export function formatDate(input: string | number): string {
    const date = new Date(input)
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  }