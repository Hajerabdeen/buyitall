
export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://hawas.runasp.net/api/v1"
    : "http://localhost:5000/api/v1";

export const apiUrl = (endpoint) => `${baseUrl}/${endpoint}`;

