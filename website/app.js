// Personal API Key for OpenWeatherMap API
document.getElementById('generate').addEventListener('click', () =>{
  const apiKey = `1f6af742306ac418d83e4bcf692a8808`;
  let zipCode = document.getElementById('zip').value ;
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}`;
  
  async function getWeather(){
    const response = await fetch(baseUrl)
    const data = await response.json();
    console.log(data);
    return data;
  }
  async function postData(url = '', data ={}){
      await getWeather();
      await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin', 
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),  
      });
    }
    postData('/api', getWeather());
})

// Event listener to add function to existing HTML DOM element

/* Function called by event listener */

/* Function to GET Web API Data*/

/* Function to POST data */


/* Function to GET Project Data */