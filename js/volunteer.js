document.addEventListener("DOMContentLoaded", function () {
    const adult = document.querySelector("#Adult");
    const adultOriginal = adult.innerHTML;

    const youth = document.querySelector("#Youth");
    const youthOriginal = youth.innerHTML;

    const foster = document.querySelector("#Foster");
    const fosterOriginal = foster.innerHTML;


    const group = document.querySelector("#Groups");
    const groupOriginal = group.innerHTML;

    adult.addEventListener("click", function () {
        adult.innerHTML = "<p>Adult Opportunities</p><p>Adults can volunteer at their local shelter for a single day, or they can sign up to be a regular volunteer. Volunteers can help with cleaning, feeding, and socializing the animals. Volunteers can also help with events and fundraisers.</p><a href='#adultvol'>Learn More Here!</a>";
        adult.style.display = "inline-block";
        adult.style.fontSize = "10pt";
        adult.style.backgroundImage = "none";
        adult.style.height = "250px";
        adult.style.width = "350px";
        adult.style.backgroundColor = "rgb(178, 178, 244)";
        adult.style.padding = "1rem";
        adult.style.verticalAlign = "top";
        adult.style.boxSizing = "border-box";
        adult.style.textAlign = "center";
    });

    adult.addEventListener("dblclick", function () { //reset all to the original values by leaving the inline style blank 
        adult.innerHTML = adultOriginal;
        adult.style.backgroundColor = "";
        adult.style.backgroundImage = "";
        adult.style.height = "";
        adult.style.width = "";
        adult.style.display = "";
        adult.style.verticalAlign = "";
        adult.style.textAlign = "";
        adult.style.boxSizing = "";
        adult.style.fontSize = "";
        adult.style.padding = "";
    });

    youth.addEventListener("click", function () {
        youth.innerHTML = "<p>Youth Opportunities</p><p>Youth can volunteer at their local shelter for a single day, or they can sign up to be a regular volunteer. Volunteers can help with cleaning, feeding, and socializing the animals. Volunteers can also help with events and fundraisers.</p><a href='#youthvol'>Learn More Here!</a>";
        youth.style.display = "inline-block";
        youth.style.fontSize = "10pt";
        youth.style.backgroundImage = "none";
        youth.style.height = "250px";
        youth.style.width = "350px";
        youth.style.backgroundColor = "rgb(244, 223, 178)";
        youth.style.padding = "1rem";
        youth.style.verticalAlign = "top";
        youth.style.boxSizing = "border-box";
        youth.style.textAlign = "center";
    });

    youth.addEventListener("dblclick", function () { //reset all to the original values by leaving the inline style blank
        youth.innerHTML = youthOriginal;
        youth.style.display = "";
        youth.style.fontSize = "";
        youth.style.backgroundImage = "";
        youth.style.height = "";
        youth.style.width = "";
        youth.style.backgroundColor = "";
        youth.style.padding = "";
        youth.style.verticalAlign = "";
        youth.style.boxSizing = "";
        youth.style.textAlign = "";
    });

    foster.addEventListener("click", function () {
        foster.innerHTML = "<p>Foster Opportunities</p><p>Foster volunteers provide temporary homes for animals in need. They help with socialization, training, and care until the animals are ready for adoption.</p><a href='#fostervol'>Learn More Here!</a>";
        foster.style.display = "inline-block";
        foster.style.fontSize = "10pt";
        foster.style.backgroundImage = "none";
        foster.style.height = "250px";
        foster.style.width = "350px";
        foster.style.backgroundColor = "rgb(178, 233, 244)";
        foster.style.padding = "1rem";
        foster.style.verticalAlign = "top";
        foster.style.boxSizing = "border-box";
        foster.style.textAlign = "center";
    });

    foster.addEventListener("dblclick", function () { //reset all to the original values by leaving the inline style blank
        foster.innerHTML = fosterOriginal;
        foster.style.display = "";
        foster.style.fontSize = "";
        foster.style.backgroundImage = "";
        foster.style.height = "";
        foster.style.width = "";
        foster.style.backgroundColor = "";
        foster.style.padding = "";
        foster.style.verticalAlign = "";
        foster.style.boxSizing = "";
        foster.style.textAlign = "";
    });

      group.addEventListener("click", function () {
        group.innerHTML = "<p>Group Opportunities</p><p>Group volunteers work together on various projects and events to support our mission. They help with organizing, fundraising, and community outreach.</p><a href='#groupvol'>Learn More Here!</a>";
        group.style.display = "inline-block";
        group.style.fontSize = "10pt";

        group.style.backgroundImage = "none";
        group.style.height = "250px";
        group.style.width = "350px";
        group.style.backgroundColor = "rgb(244, 243, 178)";
        group.style.padding = "1rem";
        group.style.verticalAlign = "top";
        group.style.boxSizing = "border-box";
        group.style.textAlign = "center";
    });

    group.addEventListener("dblclick", function () { //reset all to the original values by leaving the inline style blank
        group.innerHTML = groupOriginal;
        group.style.display = "";
        group.style.fontSize = "";
        group.style.backgroundImage = "";
        group.style.height = "";
        group.style.width = "";
        group.style.backgroundColor = "";
        group.style.padding = "";
        group.style.verticalAlign = "";
        group.style.boxSizing = "";
        group.style.textAlign = "";
    });


    });
