export function getCookie(name) {
  if (typeof document === "undefined") return null;
  
  const cookie = document.cookie
    .split('; ')
    .find(c => c.startsWith(name + '='));
  
  return cookie ? decodeURIComponent(cookie.split('=')[1]) : null;
}

export function setCookie(name, value, days = 3) {
  if (typeof document === "undefined") return;
  
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + days);
  document.cookie = `${name}=${value}; path=/; expires=${expiryDate.toUTCString()}; SameSite=Lax`;
}

export function deleteCookie(name) {
  if (typeof document === "undefined") return;
  
  document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}
