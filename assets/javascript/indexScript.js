
var indexSelectedHoroscope = document.getElementById("indexHoroscopeSelector")


indexSelectedHoroscope.addEventListener("change", function signSelected(event){
   window.location.href = 'page.html'
   localStorage.setItem('sign', event.target.value)
   console.log(localStorage)
});
