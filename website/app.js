// Personal API Key for OpenWeatherMap API
document.getElementById('generate').addEventListener('click', () =>{
  const apiKey = `1f6af742306ac418d83e4bcf692a8808`;
  let zipCode = document.getElementById('zip').value ;
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}`;
  
  /* Function to GET Web API Data*/
  async function getWeather(){
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data;
  }
  /* Function to POST data */
  async function postData(url = '', data ={}){
    data = await getWeather();
    await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin', 
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),  
      });
    }
    /* Function to GET Project Data */
  async function getData(url = ''){
    const res = await fetch(url);
    const allData = await res.json();
    try{
      console.log(allData);
      return allData;
  }
    catch{
      console.log("error")
    }
  }
  
  postData('/api')
  .then(
    getData('/all')
    )
})
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getDate()+'/'+ (d.getMonth()+1) +'/'+ d.getFullYear();
console.log(newDate);
// Event listener to add function to existing HTML DOM element

/* Function called by event listener */



