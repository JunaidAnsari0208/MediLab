/**
 * This is a list of routes that are public and do not require authentication.
 * If you want to add a new route, you can add it to the list.
 */

export const publicRoutes = ["/", "/auth/new-verification"];
/**
 * These are routes that are protected and require authentication.
 */
export const authRoutes = ["/login", "/signup", "/error"];
/**
 * The prefix for API authentication routes.
 * Routes that start with this prefix are used for API authentication purposes.
 */
export const apiAuthPrefix = "/api/auth";
/**
 * The default login redirect route.
 * This is the route that users will be redirected to after login.
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
