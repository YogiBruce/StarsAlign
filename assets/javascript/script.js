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
    displayCelebrities(event.target.value);

})



famousPeople
const famous = document.querySelector("#famousPeople");
var celebrities = {
   aries: [
      {
         name: "Reese Witherspoon",
         birthday: "March 22"
      },
      {
         name: "Elton John",
         birthday: "March 25"
      },
      {
         name: "Keira Knightley",
         birthday: "March 26"
      },
      {
         name: "Robert Downey Jr.",
         birthday: "April 4"
      },
      {
         name: "Seth Rogen",
         birthday: "April 15"
      }
   ],
   taurus: [
      {
         name: "Queen Elizabeth II",
         birthday: "April 23"
      },
      {
         name: "Robert Pattinson",
         birthday: "May 13"
      },
      {
         name: "Tina Fey",
         birthday: "May 18"
      },
      {
         name: "Channing Tatum",
         birthday: "April 26"
      },
      {
         name: "George Clooney",
         birthday: "May 6"
      }
   ],
   gemini: [
      {
         name: "Johnny Depp",
         birthday: "June 9"
      },
      {
         name: "Ryan McNamee",
         birthday: "June 4"
      },
      {
         name: "Bob Dylan",
         birthday: "May 24"
      },
      {
         name: "Marilyn Monroe",
         birthday: "June 1"
      },
      {
         name: "Natalie Portman",
         birthday: "June 9"
      }
   ],
   cancer: [
      {
         name: "Chris Pratt",
         birthday: "June 21"
      },
      {
         name: "Mindy Kaling",
         birthday: "June 24"
      },
      {
         name: "Sammy Campbell",
         birthday: "June 25"
      },
      {
         name: "Elon Musk",
         birthday: "June 28"
      },
      {
         name: "Missy Elliott",
         birthday: "July 1"
      }
   ],
   leo: [
      {
         name: "Daniel Radcliffe",
         birthday: "July 23"
      },
      {
         name: "Mick Jagger",
         birthday: "July 26"
      },
      {
         name: "Martha Stewart",
         birthday: "August 3"
      },
      {
         name: "Robert Arnold",
         birthday: "August 9"
      },
      {
         name: "Chris Hemsworth",
         birthday: "August 11"
      }
   ],
   virgo: [
      {
         name: "Jack Black",
         birthday: "August 28"
      },
      {
         name: "Cameron Diaz",
         birthday: "August 30"
      },
      {
         name: "Zandaya",
         birthday: "September 1"
      },
      {
         name: "Keanu Reeves",
         birthday: "September 2"
      },
      {
         name: "Beyonce",
         birthday: "September 4"
      }
   ],
   libra: [
      {
         name: "Will Smith",
         birthday: "September 25"
      },
      {
         name: "Caleb McLaughlin",
         birthday: "October 13"
      },
      {
         name: "Gwen Stafani",
         birthday: "October 3"
      },
      {
         name: "Lil Wayne",
         birthday: "September 27"
      },
      {
         name: "Bruno Mars",
         birthday: "October 8"
      }
   ],
   scorpio: [
      {
         name: "Pablo Picasso",
         birthday: "October 25"
      },
      {
         name: "Matthew McConaughey",
         birthday: "November 4"
      },
      {
         name: "Leonardo DiCaprio",
         birthday: "November 11"
      },
      {
         name: "Katy Perry",
         birthday: "October 25"
      },
      {
         name: "Emma Stone",
         birthday: "November 6"
      }
   ],
   sagittarius: [
      {
         name: "Scarlett Johansson",
         birthday: "November 22"
      },
      {
         name: "Shel Cloyd",
         birthday: "November 29"
      },
      {
         name: "Bill Nye",
         birthday: "November 27"
      },
      {
         name: "Russell Wilson",
         birthday: "November 29"
      },
      {
         name: "Britney Spears",
         birthday: "December 2"
      }
   ],
   capricorn: [
      {
         name: "Kit Harington",
         birthday: "December 26"
      },
      {
         name: "Lebron James",
         birthday: "December 30"
      },
      {
         name: "Betty White",
         birthday: "January 17"
      },
      {
         name: "David Bowie",
         birthday: "January 8"
      },
      {
         name: "Martin Luther King Jr.",
         birthday: "January 15"
      }
   ],
   aquarius: [
      {
         name: "Neil Diamond",
         birthday: "January 24"
      },
      {
         name: "Alecia Keys",
         birthday: "January 25"
      },
      {
         name: "Elijah Wood",
         birthday: "January 28"
      },
      {
         name: "Justin Timberlake",
         birthday: "January 31"
      },
      {
         name: "Harry Styles",
         birthday: " February 1"
      }
   ],
   pisces: [
      {
         name: "Rihanna",
         birthday: "February 20"
      },
      {
         name: "Drew Barrymore",
         birthday: "February 22"
      },
      {
         name: "Millie Bobby Brown",
         birthday: "February 19"
      },
      {
         name: "Adam Levine",
         birthday: "March 18"
      },
      {
         name: "Kumail Nanjiani",
         birthday: "February 21"
      }
   ]
}

function famousPeople(sign) {
   return celebrities[sign];
}

function displayCelebrities(sign) {
   let celebs = famousPeople(sign);

   for (let i = 0; i < celebs.length; i++) {
      let listItem = document.createElement("li");
      
      if(famous.childElementCount < celebs.length){
         listItem.textContent = celebs[i].name;
         famous.appendChild(listItem);
         let birthdaySpan = document.createElement("span");
         birthdaySpan.textContent = celebs[i].birthday;
         listItem.appendChild(birthdaySpan);
         continue;
      }
      else if(famous.childElementCount == celebs.length){
         famous.innerHTML='';
         listItem.textContent = celebs[i].name;
         famous.appendChild(listItem);
         let birthdaySpan = document.createElement("span");
         birthdaySpan.textContent = celebs[i].birthday;
         listItem.appendChild(birthdaySpan);
         continue;
      }
   }
}

//Dropdown trigger

// astronomy api stuff

async function getAstronomy() {
   let apiAstronomyInfo = fetch("https://go-apod.herokuapp.com/apod")
      .then(response => response.json());
      console.log(apiAstronomyInfo);
   let data = await apiAstronomyInfo;
const date = document.querySelector("#date");
   date.textContent = data.date;
const title = document.querySelector("#title");
   title.textContent = data.title;
const explanation = document.querySelector("#explanation");
   explanation.textContent = data.explanation;
}

getAstronomy();
