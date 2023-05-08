export const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?';

export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
  },
};
