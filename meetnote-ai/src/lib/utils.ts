import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const trUpper = (s: string) =>
  s.replace(/i/g, 'İ').replace(/ı/g, 'I').toUpperCase();
