/**
 * Cookie utility functions for client-side cookie management
 */

/**
 * Get a cookie value by name
 * @param {string} name - The name of the cookie
 * @returns {string|null} The cookie value or null if not found
 */
export function getCookie(name) {
  if (typeof document === "undefined") return null;
  
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

/**
 * Set a cookie with optional expiration
 * @param {string} name - The name of the cookie
 * @param {string} value - The value to store
 * @param {number} days - Number of days until expiration (default: 7)
 */
export function setCookie(name, value, days = 7) {
  if (typeof document === "undefined") return;
  
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + days);
  document.cookie = `${name}=${value}; path=/; expires=${expiryDate.toUTCString()}; SameSite=Lax`;
}

/**
 * Delete a cookie by name
 * @param {string} name - The name of the cookie to delete
 */
export function deleteCookie(name) {
  if (typeof document === "undefined") return;
  
  document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}
