# 🌤️ Weather Radar Dashboard

A sleek, modern weather dashboard built with **React** and **Tailwind CSS**. It features a stunning dark-mode glassmorphism interface, interactive data visualization, and real-time global weather tracking powered by the OpenWeatherMap API.

## ✨ Features

* **Real-Time Weather Data:** Get instant updates on temperature, wind speed, humidity, and atmospheric conditions for any city in the world.
* **Interactive 24-Hour Trend Graph:** A dynamic, animated line chart built with Recharts to visualize temperature fluctuations over the next 24 hours.
* **HUD Scanning Animation:** A custom, futuristic CSS "scanning" animation that overlays the search bar while fetching data.
* **Quick Find Chips:** One-click shortcut buttons for major global cities to instantly populate the dashboard.
* **Sun Cycle Tracking:** Accurate sunrise and sunset times, automatically formatted to Indian Standard Time (IST).
* **Fully Responsive:** A carefully crafted mobile-first grid layout that looks perfect on phones, tablets, and desktop monitors.
* **Unique Typography:** Integrated with Google Fonts (`Caveat`) for a distinct, stylized visual identity.

## 🛠️ Tech Stack

* **Frontend:** React (Vite)
* **Styling:** Tailwind CSS
* **Charts/Graphs:** Recharts
* **API:** OpenWeatherMap API (Current Weather, Forecast, Air Pollution)

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


*Note: This project requires `recharts`. If it wasn't installed, run `npm install recharts`.*
4. **Configure your API Key:**
Replace the hardcoded API key in `App.jsx` with your own OpenWeatherMap key, or set up a `.env` file for security.
5. **Start the development server:**
```bash
npm run dev

```



## 🎨 UI/UX Design Notes

This project utilizes a **Glassmorphism** design language. The UI relies on semi-transparent backgrounds (`bg-white/5`), heavy backdrop blurring (`backdrop-blur-2xl`), and subtle inner borders to create a layered, frosted-glass effect over a deep, radial gradient background.

## 🙏 Acknowledgments

* Weather data provided by the [OpenWeatherMap API](https://openweathermap.org/).
* Icons built using standard SVG paths.
