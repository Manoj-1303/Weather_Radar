import { useState } from 'react';
import axios from 'axios';
import Header from './components/Header'
import SearchBar from './components/SearchBar';
import MainWeather from './components/MainWeather';
import MetricCard from './components/MetricCard';
import Forecast from './components/Forecast';
import Footer from './components/Footer';


function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const apiKey = "72a937d79d75ab636a3132e38aff4964";

  const fetchWeather = async (cityName) => {
    if (!cityName) return;
    setIsLoading(true);
    setError('');

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );

      setWeatherData(response.data);

    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Failed to fetch data.");
      }
      setWeatherData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-[#1a3a30] to-gray-900 flex flex-col items-center justify-between p-4 font-['Bricolage_Grotesque'] text-white">
      <Header />
      <div className="bg-[#123626]/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 w-full max-w-5xl shadow-[0_0_50px_rgba(45,185,115,0.15)]">
        <div className="mb-8 pl-2">
          <h1 className="text-4xl underline font-semibold text-[#e2e8b5] tracking-wide mb-2 ">
            Weather Radar
          </h1>
          <p className="text-white/60 text-sm font-light tracking-wide">
            Get the latest weather report and air quality updates before you step outside.
          </p>
        </div>
        <SearchBar onSearch={fetchWeather} isLoading={isLoading} />
        {error && <div className="text-red-400 mb-4 text-center capitalize">{error}</div>}

        {weatherData && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            <div className="grid grid-cols-2 md:flex md:flex-col gap-4 order-2 md:order-1">
              <MetricCard
                title="Wind Speed"
                value={Math.round(weatherData.wind.speed * 3.6)}
                unit="km/h"
                icon={<svg className="w-10 h-10 text-[#e2e8b5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>}
              />
              <MetricCard
                title="Humidity"
                value={weatherData.main.humidity}
                unit="%"
                icon={<svg className="w-10 h-10 text-[#e2e8b5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>}
              />
            </div>

            <div className="col-span-1 md:col-span-2 flex flex-col gap-4 order-1 md:order-2">
              <MainWeather data={weatherData} />

              <div className="flex flex-col sm:flex-row gap-4">
                <MetricCard
                  title="Feels Like"
                  value={Math.round(weatherData.main.feels_like)}
                  unit="°C"
                  layout="horizontal"
                  icon={<svg className="w-8 h-8 text-[#e2e8b5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>}
                />
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex-1 flex flex-col justify-center shadow-inner">
                  <h3 className="text-[#e2e8b5] text-md font-medium mb-3">Sun Cycle(IST)</h3>
                  <div className="flex justify-between items-center">

                    <div className="flex items-center gap-2">
                      <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                      <div>
                        <div className="text-xs text-white/50">Sunrise</div>
                        <div className="text-lg font-semibold tracking-wide">
                          {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div>
                        <div className="text-xs text-white/50 text-right">Sunset</div>
                        <div className="text-lg font-semibold tracking-wide">
                          {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                      <svg className="w-6 h-6 text-orange-400 mt-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="order-3 md:order-3 h-full">
              <Forecast />
            </div>

          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;