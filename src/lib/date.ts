import { format, FormatOptions } from "date-fns";

type DateType = Date | string | number;

export const formatedDateStr = (
  date: DateType,
  formatStr?: string,
  options?: FormatOptions
) => {
  return format(date, formatStr || "yyyy-MM-dd HH:mm", options);
};
