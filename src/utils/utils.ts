import { redirect } from "next/navigation";

/**
 * Redirects to a specified path with an encoded message as a query parameter.
 * @param {('error' | 'success')} type - The type of message, either 'error' or 'success'.
 * @param {string} path - The path to redirect to.
 * @param {string} message - The message to be encoded and added as a query parameter.
 * @returns {never} This function doesn't return as it triggers a redirect.
 */
export function encodedRedirect(
  type: "error" | "success",
  path: string,
  message: string,
) {
  return redirect(`${path}?${type}=${encodeURIComponent(message)}`);
}

/**
 * Formats a date string into a more readable format.
 * @param {string} dateString - The date string to format (YYYY-MM-DD).
 * @returns {string} The formatted date string (e.g., "May 28, 2023").
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Calculates the time remaining until a given date.
 * @param {string} dateString - The target date string (YYYY-MM-DD).
 * @returns {Object} An object containing days, hours, and minutes remaining.
 */
export function getTimeRemaining(dateString: string): {
  days: number;
  hours: number;
  minutes: number;
} {
  const targetDate = new Date(dateString);
  const now = new Date();

  const diffMs = targetDate.getTime() - now.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(
    (diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

  return {
    days: diffDays,
    hours: diffHours,
    minutes: diffMinutes,
  };
}

/**
 * Formats a probability value as a percentage string with higher precision.
 * @param {number} probability - The probability value (0-1).
 * @returns {string} The formatted percentage string.
 */
export function formatProbability(probability: number): string {
  // Use 1 decimal place for more precise display
  return `${(probability * 100).toFixed(1)}%`;
}

/**
 * Truncates text to a specified length and adds ellipsis if needed.
 * @param {string} text - The text to truncate.
 * @param {number} maxLength - The maximum length of the text.
 * @returns {string} The truncated text.
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}
