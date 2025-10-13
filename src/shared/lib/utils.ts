import { type ClassValue, clsx } from 'clsx';
import sanitizeHtml from 'sanitize-html';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function hasObjectValue(obj: { [key: string]: any }) {
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }

  const keys = Object.keys(obj);
  if (keys.length === 0) {
    return true;
  }

  for (const key of keys) {
    const value = obj[key];
    if (typeof value === 'object' && value !== null) {
      if (hasObjectValue(value)) {
        return true;
      }
    } else if (value !== undefined && value !== null && value !== '') {
      return true;
    }
  }

  return false;
}

export function hasArrayValue(array: any[] | undefined) {
  return (
    Array.isArray(array) &&
    array.length > 0 &&
    array.every((item) => item !== undefined && item !== null)
  );
}

// usage: <p dangerouslySetInnerHTML={{ __html: formatBrNewLine(text) }}/>
export function formatBrNewLine(text: string) {
  return sanitizeHtml(text.replace(/\n/g, '<br>'), {
    allowedTags: ['br'],
    allowedAttributes: {},
  });
}

export function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
