import { useState, useEffect } from 'react';

function Header() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 60000);
        return () => clearInterval(timer);
    }, []);

    const dateStr = time.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
    });

    const timeStr = time.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    });

    return (
        <header className="w-full max-w-5xl mx-auto mb-6">
            <div className="bg-[#123626]/40 backdrop-blur-2xl border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between shadow-[0_0_30px_rgba(45,185,115,0.1)]">

                <div className="flex items-center gap-3">
                    <div className="bg-linear-to-br from-[#52d381] to-[#2db973] p-2 rounded-xl shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-white tracking-wide">
                        Weather<span className="text-[#52d381]">Radar</span>
                    </h2>
                </div>

                <div className="hidden sm:flex flex-col items-end">
                    <span className="text-[#e2e8b5] font-semibold tracking-wider">{timeStr}</span>
                    <span className="text-white/50 text-sm">{dateStr}</span>
                </div>

            </div>
        </header>
    );
}

export default Header;