import { useState, useEffect } from 'react';
// types
import { Root } from './types';
import { Forecastday } from './types';
// api
import { url, options } from './api';
// components
import MySelect from './components/MySelect';
import MyList from './components/MyList';

function App() {
  const [city, setCity] = useState('');
  const [forecast, setForecast] = useState<Forecastday[]>([]);

  useEffect(() => {
    const getWeather = async () => {
      const res = await fetch(`${url}q=${city}&days=3`, options);
      const data: Root = await res.json();
      console.log(data.forecast.forecastday);
      setForecast(data.forecast.forecastday);
    };

    if (city.length > 0) {
      getWeather();
    }
  }, [city]);

  return (
    <main className="App">
      <h1>Weather Info</h1>
      <MySelect city={city} setCity={setCity} />
      {forecast.length > 0 && <MyList forecast={forecast} />}
    </main>
  );
}

export default App;
