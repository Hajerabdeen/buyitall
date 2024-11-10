
const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://hawas.runasp.net/api/v1"
    : "http://hawas.runasp.net/api/v1";

export const apiUrl = (endpoint) => `${baseUrl}/${endpoint}`;
