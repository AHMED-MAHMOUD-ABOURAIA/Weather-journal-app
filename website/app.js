// Personal API Key for OpenWeatherMap API
const apiKey = `1f6af742306ac418d83e4bcf692a8808`
const zipCode = document.getElementById(`zip`).value ;
console.log(zipCode);
const baseUrl = `api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`

async function postData(url = '', data ={}){
  const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });
  
    try {
      const newData = await response.json();
      console.log(newData);
    }catch(error) {
    console.log("error", error);
    }
  }
async function getWeather(){
  const response = await fetch(baseUrl);
  const data = await response.json();
  await postData('/api',data);
}
getWeather();
// Event listener to add function to existing HTML DOM element

/* Function called by event listener */

/* Function to GET Web API Data*/

/* Function to POST data */


/* Function to GET Project Data */