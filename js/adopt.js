const images = [
    "../images/lab triplets1.jpg",
    "../images/mix.jpg",
    "../images/jack-russel.jpg",
    "../images/corgie.jpg",
    "../images/chiuaha.jpg",
    "../images/german.jpg",
    "../images/borderCollie.jpg",
    "../images/frenchbulldog.jpg",
    "../images/goldenDoodle.jpg",




];
const imageAlts = [
    "Lab Triplets",
    "Mixed Breed",
    "Jack Russel",
    "Corgi",
    "Chihuahua",
    "German Shepherd",
    "Border Collie",
    "French Bulldog",
    "Golden Doodle"
];

    let currentIndex = 0;

    // Function to update the displayed image and alt text
    function updateImage() {
        document.getElementById("galleryImage").src = images[currentIndex];
        document.getElementById("galleryImage").alt = imageAlts[currentIndex];
    }

    // Show previous image
    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length; //%ensures proper wrap around of the images in the caerousel bc if the laast image is reached the modulo will return the index of 0
        updateImage();
    }

    // Show next image
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length; //%ensures proper wrap around of the images in the caerousel
        updateImage();
    }

    // Initialize gallery
    updateImage();