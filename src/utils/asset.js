/**
 * Resolve a file in /public against the app's base URL.
 * Keeps links working if the site is later deployed under a sub-path
 * or rendered from a nested route.
 */
export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
