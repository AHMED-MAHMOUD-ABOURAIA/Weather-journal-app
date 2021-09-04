/* Function called by event listener */
const performAction = () => {
  // Personal API Key for OpenWeatherMap API
  const apiKey = `1f6af742306ac418d83e4bcf692a8808`;
  let zipCode = document.getElementById("zip").value;
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}`;

  /* Function to GET Web API Data*/
  async function getWeather() {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data;
  }

  /* Function to POST data */
  async function postData(url = "", data = {}) {
    data = await getWeather();
    await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  /* Function to GET Project Data */
  async function getData(url = "") {
    const res = await fetch(url);
    const allData = await res.json();
    try {
      // console.log(allData);
      return allData;
    } catch (err) {
      console.log("error", err);
    }
  }

  // Creating a new date instance dynamically with JS
  let d = new Date();
  let newDate = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

  // Creating content variable to hold data
  const content = document.getElementById("feelings").value;

  // Adding UI elements dynamically
  const updateUI = async () => {
    const res = await fetch("/all");
    const temp = await res.text();

    try {
      document.getElementById("date").innerHTML = `today is: ${newDate}`;

      document.getElementById(
        "temp"
      ).innerHTML = `Here is your Weather-Forcast🧐: ${temp}`;

      document.getElementById(
        "content"
      ).innerHTML = `Here is how you're feeling today🔥: ${content}`;
    } catch (err) {
      console.log("error!!", err);
    }
  };

  postData("/api").then(getData("/all")).then(updateUI());
};
// Event listener to add function to existing HTML DOM element
document.getElementById("generate").addEventListener("click", performAction);
