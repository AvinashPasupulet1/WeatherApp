Weather App

A simple weather application built using Node.js, Express, HTML, CSS, and JavaScript. It fetches real-time temperature data for a given city using the OpenWeather API.

Features

Search weather by city name

Displays current temperature in Celsius

Handles invalid city names

Simple and responsive UI

Tech Stack

Node.js

Express

HTML

CSS

JavaScript

OpenWeatherMap API

Project Structure
weather-app/
│
├── server.js
├── package.json
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
Installation and Setup
Clone the repository
git clone <your-repo-url>
cd weather-app
Install dependencies
npm install
Add your OpenWeather API key

Open server.js and replace:

const API_KEY = "YOUR_OPENWEATHER_API_KEY_HERE";

with your actual API key from:

https://openweathermap.org/api
Run the server
npm start

Open your browser and go to:

http://localhost:3000
API Endpoint
GET /weather

Query Parameter:

city=<city_name>

Example:

http://localhost:3000/weather?city=London

Response:

{
  "city": "London",
  "temperature": 18.5
}
Screenshot
<img width="1919" height="1019" alt="Screenshot 2026-02-26 173600" src="https://github.com/user-attachments/assets/a42d79fd-5ade-4726-bb09-5fe540a68063" />
