export function processWeatherData(data) {
    const current = data.currentConditions; 
    return {
        location: data.resolvedAddress, 
        temperature: current.temp, 
        conditions: current.conditions,  
        humidity: current.humidity, 
        windspeed: current.windspeed
    }; 
}                       