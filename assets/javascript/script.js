var selectedHoroscope = document.getElementById("horoscopeSelector");

async function populateHoroscope(requestedDate, requestedSign) {
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
    // populateHoroscope("today", "gemini");
    //
    // requestedDate options = "today", "yesterday", "tomorrow"
    //
    var horoscopeURL = 'https://aztro.sameerkumar.website/?sign=' + requestedSign + "&day=" + requestedDate;
    var horoscopeData = fetch(horoscopeURL, { method: 'POST' })
        .then(response => response.json());

    // Assign result from horoscopeData fetch, to variable "data"
    const data = await horoscopeData;
    const horoscope = document.querySelector("#" + requestedDate);

    horoscope.textContent = data.description;

}

// Event listener for selector up top
selectedHoroscope.addEventListener("change", function selectSign(event) {

    // Populate horoscopes based on selected option
    populateHoroscope("yesterday", event.target.value);
    populateHoroscope("today", event.target.value);
    populateHoroscope("tomorrow", event.target.value);

})


