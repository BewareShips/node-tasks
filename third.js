
const api = {
  url: "https://goweather.herokuapp.com/weather/",
};

 const sendQuery = async (city) => {
   const responce =  await fetch (`${api.url}/${city}`)
   if(!responce.ok){
     throw new Error(`Something is wrong : ${responce.status}`)
   }
   const {temperature} = await responce.json()
   console.log(temperature)
};

sendQuery('Kyiv')



