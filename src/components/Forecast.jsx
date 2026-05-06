function Forecast() {
  const forecastData = [
    { day: 'Mon', icon: '☁️', tempH: 28, tempL: 22 },
    { day: 'Tue', icon: '🌧️', tempH: 26, tempL: 21 },
    { day: 'Wed', icon: '⛅', tempH: 29, tempL: 23 },
    { day: 'Thu', icon: '☀️', tempH: 31, tempL: 24 },
    { day: 'Fri', icon: '☀️', tempH: 32, tempL: 25 },
  ];

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-inner flex flex-col justify-between h-full">
      {forecastData.map((forecast, index) => (
        <div key={index} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
          <span className="w-10 text-white/70">{forecast.day}</span>
          <span className="text-2xl">{forecast.icon}</span>
          <div className="text-right">
            <div className="text-sm font-medium">{forecast.tempH}°C</div>
            <div className="text-xs text-white/50">{forecast.tempL}°C</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Forecast;