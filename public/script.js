document.getElementById("getWeatherBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value.trim();
  const apiKey = "3c121398ec069a2450e070f514695742"; 
  const resultBox = document.getElementById("result");

  if (!city) {
    resultBox.innerText = "Please enter a city";
    resultBox.style.display = "block";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data); 
      if (data.cod === 200) {
        resultBox.innerText = `Temperature at ${data.name} ${data.main.temp}°C`;
      } else {
        resultBox.innerText = `Error: ${data.message}`;
      }
      resultBox.style.display = "block";
    })
    .catch(error => {
      resultBox.innerText = `Error: ${error}`;
      resultBox.style.display = "block";
    });
});
