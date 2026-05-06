import { useState } from 'react';

function SearchBar({ onSearch, isLoading }) {
  const [searchInput, setSearchInput] = useState('');

  const popularCities = ['Chennai', 'Bangalore', 'Delhi', 'Hyderabad', 'London', 'Dubai'];

  const handleQuickSearch = (city) => {
    setSearchInput(city);
    onSearch(city);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearch(searchInput);
    }
  };

  return (
    <div className="w-full mb-6">
      <style>{`
        @keyframes hud-scan {
          0% { transform: translateX(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(300%); opacity: 0; }
        }
        .animate-hud-scan {
          animation: hud-scan 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>

      <form onSubmit={handleSubmit} className="flex gap-4">
        <div className={`relative flex-1 rounded-xl transition-all duration-300 ${isLoading
            ? 'shadow-[0_0_20px_rgba(82,211,129,0.2)] border-[#52d381]'
            : 'border border-transparent'
          }`}>
          {isLoading && (
            <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-xl">
              <div className="absolute inset-0 border border-[#52d381] rounded-xl animate-pulse opacity-70"></div>
              <div className="w-1/3 h-full bg-linear-to-r from-transparent via-[#52d381]/40 to-transparent animate-hud-scan"></div>
            </div>
          )}

          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Enter your City Name"
            disabled={isLoading}
            className="w-full relative z-10 bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 outline-none focus:border-[#52d381]/50 transition-colors disabled:opacity-70"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="bg-linear-to-b from-[#52d381]/20 to-black/50 border border-[#52d381]/30 hover:border-[#52d381]/60 px-8 py-3 rounded-xl font-medium transition-all shadow-lg"
        >
          {isLoading ? (
            <span className="text-[#52d381] animate-pulse">Scanning...</span>
          ) : (
            'Get Report'
          )}
        </button>
      </form>

      <div className="flex flex-wrap items-center gap-2 mt-4 pl-1">
        <span className="text-white/40 text-xs py-1.5 mr-1 font-medium tracking-wide">
          Quick Find:
        </span>

        {popularCities.map((city) => (
          <button
            key={city}
            type="button"
            onClick={() => handleQuickSearch(city)}
            disabled={isLoading}
            className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#52d381]/50 hover:text-[#e2e8b5] transition-all text-base text-white/70 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-inner"
          >
            {city}
          </button>
        ))}
      </div>

    </div>
  );
}

export default SearchBar;