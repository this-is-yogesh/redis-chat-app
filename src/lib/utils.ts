import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/* so this is used to basically do conditional css , like if this happens then condition1 else condition2*/
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
