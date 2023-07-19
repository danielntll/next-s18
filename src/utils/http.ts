const BASE_URL = "https://swapi.dev/api/";

export const GET = async (endpoint: string) => {
  const res = await fetch(`${BASE_URL}${endpoint}`);
  const data = await res.json();
  return data;
};
