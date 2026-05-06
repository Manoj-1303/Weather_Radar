function MainWeather({ data }) {
  if (!data) return null;

  return (
    <div className="bg-linear-to-br from-[#2a5a44]/80 to-[#123626]/80 border border-white/10 rounded-3xl p-8 flex-1 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none"></div>

      <h2 className="text-[#e2e8b5] text-2xl font-medium tracking-wide mb-6">
        {data.name} Weather Report
      </h2>

      <div className="flex items-center gap-8 z-10">
        <div className="w-32 h-32 bg-black/20 rounded-full flex items-center justify-center border border-white/10 shadow-inner">
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
            alt="weather icon"
            className="w-full h-full object-contain"
          />
        </div>

        <div>
          <div className="text-7xl font-light tracking-tighter mb-2">
            {Math.round(data.main.temp)}°C
          </div>
          <div className="text-lg text-white/80 capitalize tracking-wide">
            {data.weather[0].description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainWeather;