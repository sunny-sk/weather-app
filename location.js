
window.addEventListener("load",()=>{
    let longitude;
    let latitude;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            longitude =  position.coords.longitude;
            latitude  =  position.coords.latitude;
            const proxy = 'https://cors-anywhere.herokuapp.com/'
     const api = `${proxy}https://api.darksky.net/forecast/02a86720fdc75c89539b7fa16a9c87a6/${latitude},${longitude}`;
     fetch(api).then(function(response){
         return response.json()
     }).then(function(data){
         const setData = data;
         console.log(data)
         $(".city").innerText = `timezone : ${data.timezone}`
        $(".title-under-city").innerText = `${data.currently.summary}`;
        $(".temprature-f").innerText = `${data.currently.temperature} F`
        $(".temprature-c").innerText = `${(((data.currently.temperature -32)*5)/9).toFixed(2)} C`    
        var skycons = new Skycons({"color": "green"});
        var currentIcon = data.currently.icon.replace(/-/g,"_");
         var res = currentIcon.toUpperCase();
        skycons.add("icon1", res);
        skycons.play();
    })
    
      
})
}else{
        console.log("feature not sported")
    }
   
  
})


