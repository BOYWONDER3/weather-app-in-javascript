import axios from 'axios'



// https://archive-api.open-meteo.com/v1/archive?.41&start_date=2023-03-24&end_date=2023-04-07&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,windspeed_10m_max&temperature_unit=fahrenheit&windspeed_unit=mph&timeformat=unixtime




export function getWeather ( lat, lon, timezone ) {
    return axios.get('https://archive-api.open-meteo.com/v1/archive?.41&start_date=2023-03-24&end_date=2023-04-07&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,windspeed_10m_max&temperature_unit=fahrenheit&windspeed_unit=mph&timeformat=unixtime',
     { params: {
        latitude: lat,
        longitude: lon,
        timezone,
     },
    }
   ).then(({ data }) => {
    return {
        // current: parseApparentWeather(data),
        // daily: parseDailyWeather(data),
        // hourly: parseHourlyWeather(data),
    }
   })
}

function parseCurrentWeather({ current_weather, daily}) {
    const { temperature: ApparentTemp, windspeed: windSpeed, weathercode: iconCode} = current_weather
    const { 
        temperature_2m_max: {maxTemp},
        temperature_2m_min: {minTemp},
        apparent_temperature_max: {maxFeelsLike},
        apparent_temperature_min: {minFeelsLike},
        precipitation_sum: {precip},
    } = daily


    return {
        currentTemp: Math.round(currentTemp),
        hightTemp: Math.round(maxTemp),
        lowTemp: Math.round(minTemp),
        highFeelsLike: Math.round(maxFeelsLike),
        lowFeelsLike: Math.round(minFeelsLike),
        windSpeed: Math.round(windSpeed),
        precip: Math.round(precip * 100) / 100,
        iconCode,
    }
}