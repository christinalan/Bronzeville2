//randomize videos
let video = document.getElementById("video");
let audio = document.getElementById("audio");
let source = document.createElement("source");
//lefthand person's thing
let text = document.getElementById("description");
let fullML = document.getElementById("full_des");
let addtext = document.createElement("p");
let credit = document.getElementById("credit");
let addcredit = document.createElement("p");
//the actual name of place/sound/object
let description = document.getElementById("sentence");
let adddes = document.createElement("p");
let isMuted;

let neighborhood = document.getElementById("neighborhood");
let place = document.getElementById("place");
let sound = document.getElementById("sound");
let smell = document.getElementById("smell");
let event = document.getElementById("event");
let object = document.getElementById("object");
let addMLN = document.createElement("p");
let addMLP = document.createElement("p");
let addMLS = document.createElement("p");
let addMLSM = document.createElement("p");
let addMLE = document.createElement("p");
let addMLO = document.createElement("p");

let glenance = {
  text: "glenance's place",
  src: "Assets/Sip Savor2_Place.mp4",
  des: "Sip & Savor",
  credit: "Credit: Toya Miller",
  neighborhood: "Bronzeville",
  place: "Sip & Savor",
  sound: "the hum of conversation",
  smell: "coffee",
  history: "The Forum",
  object: "Attractive, community-inspired light post",
};

//text example for glenance full maplib, might try to import from csv?
let glenanceML = {
  neighborhood: "Bronzeville",
  place: "Sip & Savor",
  sound: "the hum of conversation",
  smell: "coffee",
  history: "The Forum",
  object: "Attractive, community-inspired light post",
};

let azurii = {
  text: "azurii's place",
  des: "Mandrake Park",
  src: "Assets/Mandrake Park2_Place.mp4",
  credit: "Credit: Pastor Michael Neal",
  neighborhood: "Oakland",
  place: "Mandrake Park",
  sound: "Kids' Laughing",
  smell: "Grass",
  history: "The man Mandrake Park was named after",
  object: "Nice house",
};

let susan = {
  text: "susan's little known history fact",
  des: "Black Excellence",
  src: "Assets/Black Excellence Elder_History.mp4",
  credit: "Credit: Kathy Chaney",
  neighborhood: "Bronzeville",
  place: "Neighborhood gatherings and support local businesses",
  sound: "Black joy and laughter",
  smell: "Good Food",
  history: "BLACK EXCELLENCE",
  object: "Community map",
};

let jarred = {
  text: "jarred's smells",
  des: "Uncle J's Bar B Que",
  src: "Assets/Uncle Js_Smells.mp4",
  credit: "Credit: Uncle J's Bar B Que",
  neighborhood: "Bronzeville",
  place: "Peach's",
  sound:
    "the whistle of the man from the apartment complex across the street looking for his cats",
  smell: "UNCLE J'S BAR B QUE",
  history: "B QUE",
  object: "community-run business",
};

let ezinwa = {
  text: "ezinwa's little known history fact",
  des: "Bud Billiken Parade",
  src: "Assets/Bud Bilken Parade_History.mp4",
  credit: "Credit: James Harris",
  neighborhood: "Oakwood Shores",
  place: "Ellis Park",
  sound: "People laughing and playing (not too loud) music",
  smell: "nothing",
  history:
    "the real familial bonds that existed in the former Ida B Wells housing development; grassroots organizing; structural displacement through housing policies;",
  object: "green space and bench",
};

let franklin = {
  text: "franklin's sounds",
  des: "Kids playing",
  src: "Assets/Sounds/franklin.wav",
  credit: "",
  neighborhood: "Bronzeville/ Grand Blvd",
  place: "Sip and Savor",
  sound: "KIDS PLAYING",
  smell: "water from the lakefront",
  history: "the Wabash YMCA and Carter G.Woodson",
  object: "Historical marker",
};

let marcellus = {
  text: "marcellus' sounds",
  des: "People conversing over coffee and tea",
  src: "Assets/Sounds/marshall.wav",
  credit: "",
  neighborhood: "Bronzeville",
  place: "Sip and Savor",
  sound: "PEOPLE CONVERSING OVER COFFEE AND TEA",
  smell: "coffee",
  history: "black achievement and pride",
  object: "garbage cans, no loitering, a comfortable presence",
};

let newsources = [glenance, azurii, susan, jarred, ezinwa, franklin, marcellus];

let randomNumber = Math.floor(Math.random() * newsources.length);

window.addEventListener("load", () => {
  // console.log(video.autoplay);

  // video.width = innerWidth;
  // video.height = innerHeight;

  source.setAttribute("src", newsources[randomNumber].src);
  // console.log(randomNumber);

  video.appendChild(source);
  video.load();

  addtext.innerHTML = newsources[randomNumber].text;
  // console.log(addtext.innerHTML);
  text.appendChild(addtext);

  adddes.innerHTML = newsources[randomNumber].des;
  description.appendChild(adddes);

  addcredit.innerHTML = newsources[randomNumber].credit;
  credit.appendChild(addcredit);

  text.addEventListener("mouseover", () => {
    console.log("hello");
    fullML.style.zIndex = 9;
    fullML.style.opacity = 1;
    addMLN.innerHTML = newsources[randomNumber].neighborhood;
    neighborhood.appendChild(addMLN);
    neighborhood.style.color = "lightblue";
    addMLP.innerHTML = newsources[randomNumber].place;
    place.appendChild(addMLP);
    place.style.color = "lightblue";
    addMLS.innerHTML = newsources[randomNumber].sound;
    sound.appendChild(addMLS);
    sound.style.color = "lightblue";
    addMLSM.innerHTML = newsources[randomNumber].smell;
    smell.appendChild(addMLSM);
    smell.style.color = "lightblue";
    addMLE.innerHTML = newsources[randomNumber].history;
    event.appendChild(addMLE);
    event.style.color = "lightblue";
    addMLO.innerHTML = newsources[randomNumber].object;
    object.appendChild(addMLO);
    object.style.color = "lightblue";
  });

  let stringSource = JSON.stringify(source.src);
  // console.log(stringSource.includes("wav"));

  if (stringSource.includes("mp4")) {
    // renderer.setSize(0, 0);
    // document.body.style.backgroundColor = "black";
  } else if (stringSource.includes("wav")) {
    // renderer.setSize(window.innerWidth, window.innerHeight);
  }

  let infoSpan = document.getElementById("info-span");
  let hoverBox = document.getElementById("full_des");

  infoSpan.onclick = function () {
    hoverBox.style.display = "none";
  };

  dragElement(document.getElementById("full_des"));

  function dragElement(elmnt) {
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
});

let reloadButton = document.getElementById("random-button");
let lastPick = 0;

reloadButton.addEventListener("click", () => {
  let newRandom = Math.floor(Math.random() * newsources.length);

  if (newRandom != lastPick) {
    lastPick = newRandom;
  } else {
    newRandom = Math.floor(Math.random() * newsources.length);
  }

  source.setAttribute("src", newsources[newRandom].src);
  video.appendChild(source);
  video.load();

  addtext.innerHTML = newsources[newRandom].text;
  console.log(addtext.innerHTML);
  text.appendChild(addtext);

  adddes.innerHTML = newsources[newRandom].des;
  description.appendChild(adddes);

  addcredit.innerHTML = newsources[newRandom].credit;
  credit.appendChild(addcredit);

  fullML.style.opacity = 0;

  text.addEventListener("mouseover", () => {
    console.log("hello");
    fullML.style.zIndex = 9;
    fullML.style.opacity = 1;
    addMLN.innerHTML = newsources[newRandom].neighborhood;
    neighborhood.appendChild(addMLN);
    neighborhood.style.color = "lightblue";
    addMLP.innerHTML = newsources[newRandom].place;
    place.appendChild(addMLP);
    place.style.color = "lightblue";
    addMLS.innerHTML = newsources[newRandom].sound;
    sound.appendChild(addMLS);
    sound.style.color = "lightblue";
    addMLSM.innerHTML = newsources[newRandom].smell;
    smell.appendChild(addMLSM);
    smell.style.color = "lightblue";
    addMLE.innerHTML = newsources[newRandom].history;
    event.appendChild(addMLE);
    event.style.color = "lightblue";
    addMLO.innerHTML = newsources[newRandom].object;
    object.appendChild(addMLO);
    object.style.color = "lightblue";
  });

  let stringSource = JSON.stringify(source.src);
  // console.log(stringSource.includes("mp4"));

  if (stringSource.includes("mp4")) {
    renderer.setSize(0, 0);
    context.fillStyle = "#000000";
    // document.body.style.backgroundColor = "black";
  } else if (stringSource.includes("wav")) {
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
});

let unmuteButton = document.getElementById("unmute");
let muteImage = document.getElementById("mute-image");

unmuteButton.addEventListener("click", () => {
  isMuted = !isMuted;

  console.log(isMuted);
  if (isMuted) {
    video.muted = false;
    muteImage.src = "Images/unmuted_black.png";
  } else {
    video.muted = true;
    muteImage.src = "Images/muted_black.png";
  }
});

unmuteButton.addEventListener("mouseenter", () => {
  console.log("mouse hover");

  if (isMuted) {
    muteImage.src = "Images/unmuted_black.png";
  } else {
    muteImage.src = "Images/muted_black.png";
  }
});

unmuteButton.addEventListener("mouseleave", () => {
  console.log("mouse left");

  if (isMuted) {
    muteImage.src = "Images/unmuted.png";
  } else {
    muteImage.src = "Images/muted.png";
  }
});
