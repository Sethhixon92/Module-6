const weatherData = function() {
   var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=Austin&appid=9e58a37a5bf0d1b327d8c80ad0c1af21";
    
   fetch(apiUrl).then(function(response) {
       response.json().then(function(data) {
           console.log(data);
       });
   });
};

weatherData();