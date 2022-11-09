import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type { Weather, WeatherValue } from '../../types'; 

const initialState : Weather = {
    value: {
        coord: {
            lon: -77.05,
            lat: -12.05
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01n"
            }
          ],
          base: "stations",
          main: {
            temp: 289.46,
            feels_like: 289.03,
            temp_min: 289.46,
            temp_max: 289.92,
            pressure: 1018,
            humidity: 72
          },
          visibility: 10000,
          wind: {
            speed: 6.69,
            deg: 150
          },
          clouds: {
            all: 0
          },
          dt: 1667966146,
          sys: {
            type: 1,
            id: 8682,
            country: "US",
            sunrise: 1667903629,
            sunset: 1667949008
          },
          timezone: -18000,
          id: 3930376,
          name: "Rímac",
          cod: 200
    }
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        updateWeatherData: (state, action:PayloadAction<WeatherValue>)  => {
            state.value = action.payload;
        }
    }
})

export const {updateWeatherData} = weatherSlice.actions;
export default weatherSlice.reducer;
