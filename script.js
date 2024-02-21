(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    const eventDate = "06/22/2024";
    
    const countDown = new Date(eventDate).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          // Gör något när datumet är nått
          if (distance < 0) {
            document.getElementById("headline").innerText = "THE CURRENT UTE NU!";
            document.getElementById("countdown").style.display = "none";
            clearInterval(x);
          }
        }, 0)
}());
