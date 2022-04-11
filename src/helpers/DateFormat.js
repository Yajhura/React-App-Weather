import { format } from "date-fns";

export const DateFormat = (date) => {
  return format(new Date(date), "EEEE");
};
