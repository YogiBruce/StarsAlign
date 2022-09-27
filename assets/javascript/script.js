

function getHoroscope(requestedDate, requestedSign) {
    // Below are exammple results from this function 
    //
    // "date_range": "May 21 - Jun 21",
    // "current_date": "September 27, 2022",
    // "description": "Make your plans now etc etc",
    // "compatibility": "Aquarius",
    // "mood": "Mellow",
    // "color": "Navy Blue",
    // "lucky_number": "45",
    // "lucky_time": "1am"
    //
    // var horoscopeObjectExample = getHoroscope("today", "gemini");
    //
    // requestedDate options = "today", "yesterday", "tomorrow"
    //
    const horoscopeURL = 'https://aztro.sameerkumar.website/?sign=' + requestedSign + "&day=" + requestedDate;

    fetch(horoscopeURL, {
        method: 'POST'
    })
        .then(response => response.json())
        .then(json => {
            console.log(json)
        });
}
var selectedHoroscope = document.getElementById("horoscopeSelector");

selectedHoroscope.addEventListener("change",function selectSign(event){
    var previousDayHoroscope = getHoroscope("yesterday",event.target.value);
    var currentDayHoroscope = getHoroscope("today",event.target.value);
    var nextDayHoroscope = getHoroscope("tomorrow",event.target.value);
})





