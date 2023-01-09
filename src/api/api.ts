const BASE_URL = 'https://retoolapi.dev/6lHbLy/data';

export const fetchData = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
