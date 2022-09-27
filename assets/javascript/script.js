
 async function getHoroscope(requestedDate, requestedSign) {
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
    var horoscopeURL = 'https://aztro.sameerkumar.website/?sign=' + requestedSign + "&day=" + requestedDate;
    var horoscopeData = fetch(horoscopeURL, {
        method: 'POST'
    })
        .then(response => response.json());

    const data = await horoscopeData;
    return(await data.description)

 }
// Construct selector object
var selectedHoroscope = document.getElementById("horoscopeSelector");

// Event listener for selector up top
selectedHoroscope.addEventListener("change", function selectSign(event) {

    // Populate horoscopes based on selected option
    var previousDayHoroscope = getHoroscope("yesterday", event.target.value);
    console.log(previousDayHoroscope);
    var currentDayHoroscope = getHoroscope("today", event.target.value);
    var nextDayHoroscope = getHoroscope("tomorrow", event.target.value);
    // Populate element objects from DOM for dynamic change
    var previousDayElement = document.getElementById("yesterdayHoroscope");
    var currentDayElement = document.getElementById("todayHoroscope");
    var nextDayElement = document.getElementById("tomorrowHoroscope");

    // Function to change data dynamically on event call
    function fillOutHoroscopeCard(cardElement, cardData) {
        cardElement.getElementsByTagName("p").textContent = cardData;
    }

    //Run above function for three options
    fillOutHoroscopeCard(previousDayElement, previousDayHoroscope);
    fillOutHoroscopeCard(currentDayElement, currentDayHoroscope);
    fillOutHoroscopeCard(nextDayElement, nextDayHoroscope);
})


