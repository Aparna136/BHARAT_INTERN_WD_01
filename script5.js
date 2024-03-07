 function getWeather() {
            const locationInput = document.getElementById('location');
            const location = locationInput.value;

            // Replace 'YOUR_API_KEY' with your actual API key from a weather service provider
            const apiKey = 'YOUR_API_KEY';
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    displayWeather(data);
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                    alert('Error fetching weather data. Please try again.');
                });
        }

        function displayWeather(data) {
            const weatherInfoDiv = document.getElementById('weather-info');

            if (data.cod === '404') {
                weatherInfoDiv.innerHTML = '<p>Location not found. Please try again.</p>';
            } else {
                const temperature = data.main.temp;
                const description = data.weather[0].description;

                const weatherHtml = `
                    <h2>Current Weather</h2>
                    <p>Temperature: ${temperature} °C</p>
                    <p>Description: ${description}</p>
                `;

                weatherInfoDiv.innerHTML = weatherHtml;
            }
        }
    

