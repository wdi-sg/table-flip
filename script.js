console.log("hello script js");
var clickCount = 0;
const submitButton = document.getElementById("submit");
submitButton.onclick = purchaseTicket;

function purchaseTicket() {
  var currentInput = document.getElementById("input").value;
  var planeType = regPlane;

  console.log(++clickCount + ". Purchase ticket function called");
  console.log(clickCount + ". Current input: " + currentInput);
  console.log("Current cookie: " + getCookie("place"));
  if (!isValid(currentInput)) { // Return if input is invalid
    return;
  }

  if (cookieExists()) {
    console.log(clickCount + ". Cookie exists!");
    if (getCookie("place") == "KL") {
      if (currentInput == "buy") {
        updateRegPlane(KLPlane);
        planeType = KLPlane;
        console.log("The current plane type is: " + planeType.name);
      }
      else {
        deleteCookie("place");
        console.log("Cookie deleted: " + getCookie("place"));
        purchaseTicket();
      }
    }
    else if (getCookie("place") == "bali") {
      if (isCabinPurchase(currentInput)) { // input = "buy economy/business/first"
        const prop = getCabinProp(currentInput);
        updateCabinSeats(baliPlane, prop);
        planeType = baliPlane;
      }
      else {
        deleteCookie("place");
        console.log("Cookie deleted: " + getCookie("place"));
        purchaseTicket();
      }
    }
  }

  else { // Cookie does not exists
    console.log(clickCount + ". Cookie does not exists!");
    if (isCabinPurchase(currentInput)) { // input = "buy economy/business/first"
      const prop = getCabinProp(currentInput);
      updateCabinSeats(cabinPlane, prop);
      planeType = cabinPlane;
    }

    else if (isDestination(currentInput)) { //input == "bali/ KL"
      if (currentInput == "bali") { // input = "bali"
        planeType = baliPlane;
        setCookie("place", "bali");
      }
      else { // input = "KL"
        planeType = KLPlane;
        setCookie("place", "KL");
      }
      console.log("Cookies created: " + getCookie("place"));
      // setCookie("place", currentInput);
    }

    else { // input = anything else
      updateRegPlane(regPlane);
      planeType = regPlane;
    }
  }
  console.log(clickCount + ". Plane type is: " + planeType.name);
  displayMessage(planeType);
  console.log("Purchase ticket function ends.");
}

function displayMessage(planeType) {
    console.log(clickCount + ". Displaying messages: " + planeType.name);
  // if plane type is cabin
  if (planeType == baliPlane || planeType == cabinPlane) {
    overwrite("Tickets for " + planeType.name + ". Economy: $" + planeType.economy.currPrice +
          " No. of seats left: " + planeType.economy.availSeats +
          " Business: $" + planeType.business.currPrice +
          " No. of seats left: " + planeType.business.availSeats +
          " First class $" + planeType.first.currPrice +
          " No. of seats left: " + planeType.first.availSeats);
  }
  else {
    if (planeType.availSeats <= 0) {
      overwrite("Tickets for " + planeType.name + " is TOTALLY full!");
    }
    else {
      overwrite("Tickets for " + planeType.name +
      ". Price: $" + planeType.currPrice +
      ". No. of seats left: " + planeType.availSeats);
      console.log(planeType.name + " message displayed.");
    }
  }
}

function cookieExists() {
  return getCookie("place") != "";
}

function deleteCookie(cname) {
  document.cookie = cname + "=; expires = Thu, 01 Jan 1970 00:00:00 GMT";
}

function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue;
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function getFleet(currentInput) {
  if (currentInput == "bali") {
    return "cabin";
  }
  return "regular";
}

function isDestination(currentInput) {
  if (currentInput === "bali" || currentInput === "KL") {
    return true;
  }
  return false;
}

/* WRITING FUNCTIONS */
var overwrite = function(data){
    var output = document.querySelector('#output');
    output.innerText = data;
}

function append(text) {
    var output = document.querySelector('#output');
    output.innerText += text;
}

// Purpose: checks the validity of input,
// Input must be a string and must not be empty
function isValid(input) {
  if (!isNaN(input) || input === "") {
    overwrite("Uh oh! Input must be a string and must not be empty ~");
    return false;
  }
  return true;
}

// Object: A regular plane
var regPlane = {
  name: "Regular plane",
  totalSeats: 10,
  currPrice: 50.0,
  availSeats: 10,
  soldSeats: 0,
};

var KLPlane = {
  name: "KL (regular) plane",
  totalSeats: 10,
  currPrice: 50.0,
  availSeats: 10,
  soldSeats: 0,
};

// Object: A cabin plane
var cabinPlane = {
  name: "Cabin plane",
  economy: {
    totalSeats: 15,
    availSeats: 15,
    currPrice: 50,
    pricePercentage: [1.03, 1.05],
    lastSeat: 91000,
  },
  business: {
    totalSeats: 6,
    availSeats: 6,
    currPrice: 50,
    pricePercentage: [1.06, 1.10],
    lastSeat: 91000,
  },
  first: {
    totalSeats: 4,
    availSeats: 4,
    currPrice: 50,
    pricePercentage: [1.15, 1.50],
    lastSeat: 191000,
  }
};

var baliPlane = {
  name: "Bali (cabin) plane",
  economy: {
    totalSeats: 15,
    availSeats: 15,
    currPrice: 50,
    pricePercentage: [1.03, 1.05],
    lastSeat: 91000,
  },
  business: {
    totalSeats: 6,
    availSeats: 6,
    currPrice: 50,
    pricePercentage: [1.06, 1.10],
    lastSeat: 91000,
  },
  first: {
    totalSeats: 4,
    availSeats: 4,
    currPrice: 50,
    pricePercentage: [1.15, 1.50],
    lastSeat: 191000,
  }
};

function getCabinTicket(plane, prop) {
  if (plane[prop].availSeats == 1) { // This is the last seat
    return plane[prop].lastSeat;
  }
  else if (plane[prop].availSeats > plane[prop].totalSeats) {
    return plane[prop].currPrice * plane[prop].pricePercentage[0];
  }
  return plane[prop].currPrice * plane[prop].pricePercentage[1];
}

// Purpose: for regularPlanes, returns the price of the next seat W/O compound interest
function getNextSeatPrice(plane) {
  if (plane.availSeats === plane.totalSeats) {
    return plane.currPrice;
  }
  // If this is the last seat
  else if (plane.availSeats == 1) {
    return 91000;
  }
  // If it is the first half seats
  else if (plane.availSeats > plane.totalSeats/2) {
    return 50 * 1.03;
  }
  // If it is the last half seats
  return 50 * 1.05;
}

// Takes in a regular plane (KLPlane/regPlane),
// Returns true if seats are sufficient
// else, returns false
function updateRegPlane(plane) {
  plane.currPrice = getNextSeatPrice(plane).toFixed(2);
  plane.seatsSold++;
  plane.availSeats--;
}

function updateCabinSeats(plane, prop) {
  if (plane[prop].availSeats === 0) {
    plane[prop].availSeats = 0;
  }
  else {
    plane[prop].availSeats--;
    plane[prop].currPrice = getCabinTicket(plane, prop).toFixed(2);
    plane[prop].soldSeats++;
  }
}
function isCabinPurchase(currentInput) {
  return ((currentInput == "buy first class") || (currentInput == "buy business class")
          || (currentInput == "buy economy class"));
}

function getCabinProp(currentInput) {
  switch (currentInput) {
    case "buy first class":
      return "first";
    case "buy business class":
      return "business";
    case "buy economy class":
      return "economy";
    default: return "Error 404";
  }
}