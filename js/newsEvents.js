window.addEventListener("load", function() {
    
    document.querySelector("#eventPhotoArea img").addEventListener("mouseover", increaseOpacity);
    document.querySelector("#eventPhotoArea img").addEventListener("mouseout", decreaseOpacity);
});

const eventTitles = [
    "Jacksonville Dogo Yoga Day",
    "Jacksonville Pup Walk"
];

const eventImages = [
    "../images/newsEvent1.avif",
    "../images/newsEvent2.avif"
];

const eventDescriptions = [
    "Join us for the Jacksonville Dogo Yoga Day! We will be hosting a day where you can bring your dog and friends to a yoga session to do yoga that is specifically designed for you and your dog! This event is to increase the bond between you and your pup alongside being able to meet other puppies and dog owners in the community.",
    "Filler text for the second event. We will be hosting a pup walk in the park where you can bring your dog and friends to walk around the park and meet other dogs and dog owners in the community. This is a great way to get some exercise for you and your pup while also being able to socialize with other dogs and dog owners in the community."
];

const eventImageTitles = [
    "Dogo Yoga Day",
    "Filler-textt"
];

const eventImageAlts = [
    "Jacksonville Dogo Yoga Day Image",
    "Filler text image"
];

let index = 0;

function updateEvent() {
    document.getElementById("eventPhoto").src = eventImages[index];
    document.getElementById("eventPhoto").alt = eventImageAlts[index];
    document.getElementById("eventPhoto").title = eventTitles[index];
    document.getElementById("eventTitle").textContent = eventTitles[index];
    document.getElementById("eventDescription").textContent = eventDescriptions[index];
}

function prevEvent() {
    index = (index - 1 + eventTitles.length) % eventTitles.length;
    index = (index - 1 + eventImages.length) % eventImages.length;
    index = (index - 1 + eventDescriptions.length) % eventDescriptions.length;
    index = (index - 1 + eventImageTitles.length) % eventImageTitles.length;
    index = (index - 1 + eventImageAlts.length) % eventImageAlts.length;
    updateEvent();
}

function nextEvent() {
    index = (index + 1) % eventTitles.length;
    index = (index + 1) % eventImages.length;
    index = (index + 1) % eventDescriptions.length;
    index = (index + 1) % eventImageTitles.length;
    index = (index + 1) % eventImageAlts.length;
    updateEvent();
}

function increaseOpacity() {
    document.querySelector("#eventPhotoArea figcaption").style.opacity = "0.8";
}

function decreaseOpacity() {
    document.querySelector("#eventPhotoArea figcaption").style.opacity = "0";
}
