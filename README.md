# 🌤️ Weather Radar Dashboard

A sleek, premium weather dashboard built with **React** and **Tailwind CSS**. It features a stunning dark-mode glassmorphism interface, interactive data visualization, and real-time global weather tracking powered by the OpenWeatherMap API.

## ✨ Features

* **Real-Time Weather Data:** Get instant updates on temperature, wind speed, humidity, and atmospheric conditions for any city in the world.
* **Interactive 24-Hour Trend Graph:** A dynamic, animated line chart built with Recharts to visualize temperature fluctuations over the next 24 hours.
* **HUD Scanning Animation:** A custom, futuristic CSS "scanning" light beam animation that overlays the search bar while fetching data.
* **Quick Find Chips:** One-click shortcut buttons for major global cities to instantly populate the dashboard.
* **Sun Cycle Tracking:** Accurate sunrise and sunset times, automatically formatted to Indian Standard Time (IST).
* **Fully Responsive Grid:** A carefully crafted layout that perfectly adapts its visual hierarchy from mobile phones up to widescreen desktop monitors.
* **Premium Typography:** Integrated with Google Fonts (`Bricolage Grotesque`) for a highly legible, modern, and technical aesthetic.

## 🛠️ Tech Stack

* **Frontend Framework:** React (Vite)
* **Styling:** Tailwind CSS
* **HTTP Client:** Axios
* **Charts/Graphs:** Recharts
* **API:** OpenWeatherMap API (Current Weather, Forecast)

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

* Node.js installed on your machine.
* A free API key from [OpenWeatherMap](https://openweathermap.org/).

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/weather-radar.git

```


2. **Navigate to the project directory:**
```bash
cd weather-radar

```


3. **Install dependencies:**
```bash
npm install

```


*Note: This project utilizes `axios` and `recharts`. The install command will automatically fetch them.*
4. **Configure your API Key:**
Replace the hardcoded API key in `App.jsx` with your own OpenWeatherMap key (or set up a `.env` file for production security).
5. **Start the development server:**
```bash
npm run dev

```



## 🎨 UI/UX Design Notes

This project utilizes a **Glassmorphism** design language. The UI relies on semi-transparent backgrounds (`bg-white/5`), heavy backdrop blurring (`backdrop-blur-2xl`), and subtle inner borders to create a layered, frosted-glass effect over a deep, radial gradient background.

The application utilizes native browser APIs (`Intl.DateTimeFormat` via `toLocaleTimeString`) to automatically handle timezone conversions, ensuring the Sun Cycle is always accurate to IST.

## 🙏 Acknowledgments

* Weather data provided by the [OpenWeatherMap API](https://openweathermap.org/).
* Icons built using standard SVG paths.