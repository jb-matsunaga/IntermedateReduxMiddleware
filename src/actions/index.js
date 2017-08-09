const API_KEY = '43f7d70467359c08b8aed755c4d612d7';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
    return {
        type: 'FETCH_WEATHER'
    }
}