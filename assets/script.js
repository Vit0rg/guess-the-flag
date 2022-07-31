if (navigator.onLine)
{

  const countries = [
    "united arab emirates",
  
    "andorra",
  
    "afghanistan",
  
    "antigua and barbuda",
  
    "anguilla",
  
    "albania",
  
    "armenia",
  
    "angola",
  
    "antarctica",
  
    "argentina",
  
    "american samoa",
  
    "austria",
  
    "australia",
  
    "aruba",
  
    "åland islands",
  
    "azerbaijan",
  
    "bosnia and herzegovina",
  
    "barbados",
  
    "bangladesh",
  
    "belgium",
  
    "burkina faso",
  
    "bulgaria",
  
    "bahrain",
  
    "burundi",
  
    "benin",
  
    "saint barthélemy",
  
    "bermuda",
  
    "brunei darussalam",
  
    "bolivia",
  
    "bonaire",
  
    "brazil",
  
    "the bahamas",
  
    "bhutan",
  
    "bouvet island",
  
    "botswana",
  
    "belarus",
  
    "belize",
  
    "canada",
  
    "the cocos islands",
  
    "democratic republic of congo",
  
    "the central african republic",
  
    "congo",
  
    "switzerland",
  
    "côte d'ivoire",
  
    "the cook islands",
  
    "chile",
  
    "cameroon",
  
    "china",
  
    "colombia",
  
    "costa rica",
  
    "cuba",
  
    "cabo verde",
  
    "curaçao",
  
    "christmas island",
  
    "cyprus",
  
    "czechia",
  
    "germany",
  
    "djibouti",
  
    "denmark",
  
    "dominica",
  
    "dominican republic",
  
    "algeria",
  
    "ecuador",
  
    "estonia",
  
    "egypt",
  
    "western sahara",
  
    "eritrea",
  
    "spain",
  
    "ethiopia",
  
    "european union",
  
    "finland",
  
    "fiji",
  
    "the falkland islands",
  
    "the federated states of micronesia",
  
    "the faroe islands",
  
    "france",
  
    "gabon",
  
    "england",
  
    "northern ireland",
  
    "scotland",
  
    "wales",
  
    "the united kingdom of great britain and northern ireland",
  
    "grenada",
  
    "georgia",
  
    "french guiana",
  
    "guernsey",
  
    "ghana",
  
    "gibraltar",
  
    "greenland",
  
    "gambia",
  
    "guinea",
  
    "guadeloupe",
  
    "equatorial guinea",
  
    "greece",
  
    "south georgia and the south sandwich islands",
  
    "guatemala",
  
    "guam",
  
    "guinea-bissau",
  
    "guyana",
  
    "hong kong",
  
    "heard island and mcdonald islands",
  
    "honduras",
  
    "croatia",
  
    "haiti",
  
    "hungary",
  
    "indonesia",
  
    "ireland",
  
    "israel",
  
    "isle of man",
  
    "india",
  
    "the british indian ocean territory",
  
    "iraq",
  
    "iran",
  
    "iceland",
  
    "italy",
  
    "jersey",
  
    "jamaica",
  
    "jordan",
  
    "japan",
  
    "kenya",
  
    "kyrgyzstan",
  
    "cambodia",
  
    "kiribati",
  
    "the comoros",
  
    "saint kitts and nevis",
  
    "the democratic people's republic of korea",
  
    "the republic of korea",
  
    "kuwait",
  
    "the cayman islands",
  
    "kazakhstan",
  
    "the lao people's democratic republic",
  
    "lebanon",
  
    "saint lucia",
  
    "liechtenstein",
  
    "sri lanka",
  
    "liberia",
  
    "lesotho",
  
    "lithuania",
  
    "luxembourg",
  
    "latvia",
  
    "libya",
  
    "morocco",
  
    "monaco",
  
    "the republic of moldova",
  
    "montenegro",
  
    "saint martin",
  
    "madagascar",
  
    "the marshall islands",
  
    "republic of north macedonia",
  
    "mali",
  
    "myanmar",
  
    "mongolia",
  
    "macao",
  
    "the northern mariana islands",
  
    "martinique",
  
    "mauritania",
  
    "montserrat",
  
    "malta",
  
    "mauritius",
  
    "maldives",
  
    "malawi",
  
    "mexico",
  
    "malaysia",
  
    "mozambique",
  
    "namibia",
  
    "new caledonia",
  
    "niger",
  
    "norfolk island",
  
    "nigeria",
  
    "nicaragua",
  
    "netherlands",
  
    "norway",
  
    "nepal",
  
    "nauru",
  
    "niue",
  
    "new zealand",
  
    "oman",
  
    "panama",
  
    "peru",
  
    "french polynesia",
  
    "papua new guinea",
  
    "philippines",
  
    "pakistan",
  
    "poland",
  
    "saint pierre and miquelon",
  
    "pitcairn",
  
    "puerto rico",
  
    "palestine",
  
    "portugal",
  
    "palau",
  
    "paraguay",
  
    "qatar",
  
    "réunion",
  
    "romania",
  
    "serbia",
  
    "russian federation",
  
    "rwanda",
  
    "saudi arabia",
  
    "solomon islands",
  
    "seychelles",
  
    "sudan",
  
    "sweden",
  
    "singapore",
  
    "saint helena",
  
    "slovenia",
  
    "svalbard and jan mayen",
  
    "slovakia",
  
    "sierra leone",
  
    "san marino",
  
    "senegal",
  
    "somalia",
  
    "suriname",
  
    "south sudan",
  
    "sao tome and principe",
  
    "el salvador",
  
    "sint maarten",
  
    "syrian arab republic",
  
    "eswatini",
  
    "the turks and caicos islands",
  
    "chad",
  
    "the french southern territories",
  
    "togo",
  
    "thailand",
  
    "tajikistan",
  
    "tokelau",
  
    "timor-leste",
  
    "turkmenistan",
  
    "tunisia",
  
    "tonga",
  
    "turkey",
  
    "trinidad and tobago",
  
    "tuvalu",
  
    "taiwan",
  
    "united republic of tanzania",
  
    "ukraine",
  
    "uganda",
  
    "the united states minor outlying islands",
  
    "the united states of america",
  
    "uruguay",
  
    "uzbekistan",
  
    "the holy see",
  
    "saint vincent and the grenadines",
  
    "venezuela",
  
    "british virgin islands",
  
    "us virgin islands",
  
    "viet nam",
  
    "vanuatu",
  
    "wallis and futuna",
  
    "samoa",
  
    "kosovo",
  
    "yemen",
  
    "mayotte",
  
    "south africa",
  
    "zambia",
  
    "zimbabwe",
  ];
  
  const countriesAPI = "https://countryflagsapi.com/png"
  const startButton = document.getElementById("start-btn");
  const nextButton = document.getElementById("next-btn");
  const flag = document.getElementById("flag");
  const answerButtonsElement = document.getElementById("answer-buttons");
  
  startButton.addEventListener("click", startGame);
  nextButton.addEventListener("click", () => 
  {
    setNextQuestion();
  });
  
  function startGame() 
  {
    startButton.classList.add("hide");
    flag.classList.remove("hide")
    answerButtonsElement.classList.remove("hide");
    setNextQuestion();
  }
  
  function setNextQuestion() 
  {
    resetState();
    showQuestion();
  }
  
  function showQuestion() 
  {
    let country = countries[getRandomInteger()];
    
    flag.src = `${countriesAPI}/${country}`;
    
    let answers = 
    [
      { text: `${country}`, correct: true },
      { text: `${countries[getRandomInteger()]}`, correct: false },
      { text: `${countries[getRandomInteger()]}`, correct: false },
      { text: `${countries[getRandomInteger()]}`, correct: false },    
    ]
  
    shuffleArray(answers).forEach((answer) => 
    {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      if (answer.correct || answer.text === country) 
      {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
      answerButtonsElement.appendChild(button);
    });
  }
  
  function shuffleArray(array) 
  {
    for (let i = array.length - 1; i > 0; i--) 
    {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    } 
    return array
  }
  
  function resetState() 
  {
    clearStatusClass(document.body);
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) 
    {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
  }
  
  function selectAnswer(e) 
  {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach((button) => 
    {
      setStatusClass(button, button.dataset.correct);
    });
    
    nextButton.classList.remove("hide");
  }
  
  function setStatusClass(element, correct) 
  {
    clearStatusClass(element);
    if (correct) 
    {
      element.classList.add("correct");
    } 
    else 
    {
      element.classList.add("wrong");
    }
  }
  
  function clearStatusClass(element) 
  {
    element.classList.remove("correct");
    element.classList.remove("wrong");
  }
  
  function getRandomInteger() 
  {
    return Math.floor(Math.random() * 255)
  }
  
  if ("serviceWorker" in navigator) 
  {
    navigator.serviceWorker.register("../../serviceworker.js")
  }
}

else
{
  location.assign("../offline.html");
}
