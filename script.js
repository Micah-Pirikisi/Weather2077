const apiKey = 'U6ZD5CR77U4N8B2DB5BJSQF7Y'; 

export async function fetchWeather(location) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?unitGroup=metric&key=${apiKey}&contentType=json`;; 

    try {
        const response = await fetch(url); 
        const data = await response.json(); 
        console.log('[Raw Weather Data]', data); 
        return data; 
    } catch (error) {
        console.error('API error:', error); 
    }
}