async function getWeather() {

  const city = document.getElementById("city").value;

  const apiKey = "b8519e15c7d937331a6f9a34acb4decd";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {

    const response = await fetch(url);

    const data = await response.json();

    if (response.ok) {

      document.getElementById("weatherResult").innerHTML = `
        <h2>${data.name}</h2>
        <p>🌡 Current Temperature: ${data.main.temp}°C</p>
        <p>🤗 Feels Like: ${data.main.feels_like}°C</p>
        <p>☁ Weather: ${data.weather[0].main}</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>💨 Wind Speed: ${data.wind.speed} km/h</p>
      `;

    } else {

      document.getElementById("weatherResult").innerHTML =
      "❌ City not found";

    }

  }

  catch(error) {

    document.getElementById("weatherResult").innerHTML =
    "⚠ API Error or Internet Issue";

    console.log(error);

  }

}