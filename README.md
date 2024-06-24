## Weather App 🌤️

## Table of Contents
- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)

## About
The Weather App is a mobile application built with Expo and React Native that provides real-time weather information for any city in the world. It utilizes the OpenWeatherMap API to fetch current weather data and displays it in an intuitive and visually appealing interface.

## Features
🌍 Search by City: Enter any city name to get the current weather details.
🕒 Current Weather: View real-time weather conditions including temperature, humidity, wind speed, and more.
🧭 Location-Based Weather: Automatically fetch weather data for your current location.
🌞 Weather Icons: Dynamic icons representing different weather conditions.
📅 Forecast: 5-day weather forecast with detailed daily weather conditions.
🌓 Dark Mode: Supports both light and dark themes.
📱 Responsive Design: Optimized for both Android and iOS devices.

## Installation
To get a local copy of the project up and running, follow these steps:

Prerequisites
Node.js: Make sure you have Node.js installed.
Expo CLI: Install Expo CLI globally on your machine.
bash
Copy code
npm install -g expo-cli
Clone the Repository
bash
Copy code
git clone https://github.com/your-username/weather-app.git
cd weather-app
Install Dependencies
bash
Copy code
npm install
Configure API Key
Obtain an API key from OpenWeatherMap.
Create a .env file in the root directory and add your API key:
makefile
Copy code
OPENWEATHER_API_KEY=your_api_key_here
Run the App
Start the development server:

bash
Copy code
expo start
Follow the instructions in the terminal to run the app on an emulator or a physical device using the Expo Go app.

## Usage
Open the app on your mobile device.
Enter a city name in the search bar to fetch the weather data for that location.
Allow location permissions to view weather for your current location.
Navigate through the forecast to see upcoming weather conditions.

## Screenshots
![progate-weather-app](https://github.com/addinseptyan/progate-weather-app/assets/76584759/ee065fd1-f04f-4c8f-b9f2-3ad3867b1dab)

## Technologies Used
Expo: A framework for universal React applications.
React Native: A framework for building native apps using React.
OpenWeatherMap API: Provides weather data.
Axios: HTTP client for making requests.
React Navigation: Routing and navigation in React Native apps.
Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project.
Create your Feature Branch (git checkout -b feature/AmazingFeature).
Commit your Changes (git commit -m 'Add some AmazingFeature').
Push to the Branch (git push origin feature/AmazingFeature).
Open a Pull Request.

## Acknowledgments
OpenWeatherMap
Expo
React Native
Icons by Weather Icons
