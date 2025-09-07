import Cookies from "js-cookie";

export const COOKIE_PREFERENCES_KEY = "cookiePreferences";

export type CookieSettings = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const initialCookies = {
  necessary: false,
  analytics: false,
  marketing: false,
};

export const getCookiePreferences = (): CookieSettings => {
  const prefs = Cookies.get(COOKIE_PREFERENCES_KEY);
  return prefs ? JSON.parse(prefs) : initialCookies;
};
