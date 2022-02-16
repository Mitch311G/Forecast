# Forecast
<img src="readmeAssets/FORECAST.png"></img>
## Description
A weather app that displays current weather conditions based on the user's location. The app also features the ability for user's to add locations and check the weather for a selected location. Forecast was created from scratch using ReactJS, ExpressJS, and MongoDB with weather data sourced from the OpenWeather API.
<!-- Insert photos/gifs here -->
---
## Installation
**Make sure your system meets the requirements below before following installation**
1. Clone this repo to your local machine:
    - `git clone https://github.com/Mitch311G/Forecast.git`
2. Navigate the repo's root directory:
    - `cd Forecast`
3. Install project dependencies:
    - `npm install`
4. Create `.env` file in the root directory, then copy and paste contents from `.env.example` into your `.env`.
    - Your API key goes in your `.env` file
5. Run `npm run build-dev` to build `dist/bundle.js` and `npm run start-dev` to start development server at `localhost:3000`.
6. Start developing!

### Requirements
1. Install the following to your system (if not done already):
    - [Node.js and npm](https://nodejs.org/en/download/)
    - [MongoDB Community Edition](https://docs.mongodb.com/manual/installation/)
        - Be sure to run MongoDB as a service. Insturctions found in installation guide for your system (link above).
2. Obtain your own [OpenWeather API key](https://openweathermap.org/api).
---
## Usage
- To get your local weather, simply launch the application.
- To add and view new locations:
    - Type the name of the "City, State" into the box at the top left corner of the app body and click the add (+) button.
    - Click the drop down menu below the input box and select the loaction of your choosing to view current weather data.
<!-- Insert photos/gifs here -->
---
## Provided scripts
- `npm run build-dev`
    - Using webpack and babel, this will bundle and transpile the contents of `frontend/src` directory into bundled `.js` file for browser consumption, which are linked to `index.html`, then **watch for changes and re-bundle on file changes**.
- `npm run build`
    - Builds the bundle for production and **does not watch for file changes**.
- `npm run start-dev`
    - Starts the development server (default is localhost:3000), then **watches for changes and restarts the serve with updated content on file change**.
- `npm run start`
    - Starts the app's server, but **does not watch for file changes**.
---
## Author and other
*Forecast* was developed by Mitchell Gardner, originally build in a 2-day MVP sprint for the Hack Reactor *Advanced Software Engineering Immersive Program*. Future features to be added include: ability to delete locations from list, dynamic rendering of background based on current weather, and additional forecast data (ex. 5 day forecast).