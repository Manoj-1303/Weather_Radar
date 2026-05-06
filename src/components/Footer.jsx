function Footer() {
  return (
    <footer className="w-full max-w-5xl mx-auto mt-6 text-center text-white/40 text-xs tracking-wide">
      <p>
        Weather data provided by{' '}
        <a 
          href="https://openweathermap.org/" 
          target="_blank" 
          rel="noreferrer" 
          className="text-white/60 hover:text-[#52d381] transition-colors font-medium"
        >
          OpenWeatherMap API
        </a>
        <span className="mx-3 opacity-50">|</span>
        Designed with React & Tailwind CSS
      </p>
    </footer>
  );
}

export default Footer;