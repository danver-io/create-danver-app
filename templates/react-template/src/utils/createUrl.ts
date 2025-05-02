export const createUrl = (
  baseUrl: string,
  params?: Record<string, any>
): string => {
  if (!params) return baseUrl;

  const queryString = Object.entries(params)
    .filter(([_, value]) => value !== undefined && value !== null)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");

  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
};
