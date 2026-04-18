window.addEventListener("load", function() {
    
    document.querySelector("#eventPhotoArea img").addEventListener("mouseover", increaseOpacity);
    document.querySelector("#eventPhotoArea img").addEventListener("mouseout", decreaseOpacity);
});

const eventTitles = [
    "Jacksonville Dogo Yoga Day",
    "Jacksonville Pup Walk",
    "Pup Water Works"
];

const eventImages = [
    "../images/newsEvent1.avif",
    "../images/newsEvent2.avif",
    "../images/newsEvent3.avif"
];

const eventDescriptions = [
    "Join us for the Jacksonville Dogo Yoga Day! We will be hosting a day where you can bring your dog and friends to a yoga session to do yoga that is specifically designed for you and your dog! This event is to increase the bond between you and your pup alongside being able to meet other puppies and dog owners in the community.",
    "Jacksonville Pup Walk is a great place to go on a walk with you puppies! This event is a pup walk in the park where you and your pup go on a 1.5 mile walk in the park with other dogs. This is a great way to get out of the house and spend some time with your pup while also getting some exercise in!",
    "Pup Water Works is an event that will make your pup have an amazing time if they enjoy swimming. This event allows for you and your pup to go to a waterpark for a day with plenty of other dog owners in the area! This event will help you be able to meet new community members while also going out for a swim."
];

const eventImageTitles = [
    "Dogo Yoga Day",
    "Pup Walk",
    "Pup Water Works"
];

const eventImageAlts = [
    "Jacksonville Dogo Yoga Day Image",
    "Jacksonville Pup Walk Image",
    "Pup Water Works Image"
];

let index = 0;

function updateEvent() {
    document.getElementById("eventPhoto").src = eventImages[index];
    document.getElementById("eventPhoto").alt = eventImageAlts[index];
    document.getElementById("eventPhoto").title = eventImageTitles[index];
    document.getElementById("eventTitle").textContent = eventTitles[index];
    document.getElementById("eventDescription").textContent = eventDescriptions[index];
    document.querySelector("#eventPhotoArea figcaption").textContent = eventImageTitles[index];
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
    document.querySelector("#eventPhotoArea figcaption").style.opacity = 0.8;
}

function decreaseOpacity() {
    document.querySelector("#eventPhotoArea figcaption").style.opacity = 0;
}
