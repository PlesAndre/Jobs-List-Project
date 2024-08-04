const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
];

// Seleziono gli elementi interessai per interagire con loro
let searchTitle = document.querySelector("#search-title");
let searchLocation = document.querySelector("#search-location");
let getUl = document.querySelector(".search-result");
let btn = document.querySelector("button");
let p = document.querySelector(".hidden");

// Creo una funzione che mi prende sia title che location all'interno dell'array jobs
const findJobsAds = function (title, location) {

  // Rendo i parametri case insensitive
  const lowerCaseTitle = title.toLowerCase();
  const lowerCaseLocation = location.toLowerCase();

  // Definisco le variabili che mi restituisce
  let result = [];
  let count = 0;

  // Itero all'interno di "jobs" per poter rendere tutto minuscolo e pushare tutto sull'array "result"
  for (let i = 0; i < jobs.length; i++) {
    let job = jobs[i];
    if (
      job.title.toLowerCase().includes(lowerCaseTitle) &&
      job.location.toLowerCase().includes(lowerCaseLocation) 
    ) {
      let filteredJob = {
        title: job.title,
        location: job.location,
      };
      result.push(filteredJob);
      count++;
    }
  }

  return { result, count };
};


// Il button "ascolta" l'evento
btn.addEventListener("click", function () {
  
  // Resetto i valori 
  getUl.innerHTML = "";
  p.innerHTML = "";

  // Prendo i valori attuali negli input
  let getTitle = searchTitle.value;
  let getLocation = searchLocation.value;
  
  
  if (getTitle === "" || getLocation === "") {

    // Per prevenire errori in caso non trovasse valori
    getUl.innerHTML = "<p>No results found</p>";
    p.classList.add("results-found");
  } else {

    // Prende i valori attuali come argomenti e li fai passare nella funzione "findJobsAds"
    let returnValue = findJobsAds(getTitle, getLocation);
    
    // Funzione che passa attraverso result e per ogni valore che combacia mi crei un <li>
    let listUpdate = function (value) {
      for (let i = 0; i < value.result.length; i++) {
        const createLi = document.createElement("li");
        createLi.textContent =
        value.result[i].title + " => " + value.result[i].location;
        getUl.appendChild(createLi);
      }

      // Valore che cambia tra "Results found" e "No results found" in base al count
      if(value.count > 0) {
        p.innerHTML = "Results found: " + value.count;
        p.classList.remove("hidden")
      } else {
        getUl.innerHTML = "<p>No results found</p>"
        p.classList.add("hidden")
      }
    };
    // Chiamata della funzione con parametro la variabile della funzione "findJobsAds"
    listUpdate(returnValue);
  }
});