document.addEventListener("DOMContentLoaded", function(){
    
    let volOpportunitites = document.querySelectorAll(".Opportunities ul li");
    let savedstyle = [];
    for ( opp of volOpportunitites)
    { 
        const original= {
            backgroundImg: opp.style.backgroundImage,
            backgroundSize: opp.style.backgroundSize,
            bgRepeat: opp.style.backgroundRepeat,
            bgHeight: opp.style.height,
            bgwidth: opp.style.width,
        }
        //save in array to access later 
        savedstyle.push(original);

    }
    volOpportunitites[0].addEventListener("mouseover", function(){
        volOpportunitites[0].innerHTML = "<li><h2>Adult Opportunities</h2><p>Adults can Volunteer at their local shelter for a single day, or they can sign up to be a regular volunteer. Volunteers can help with cleaning, feeding, and socializing the animals. Volunteers can also help with events and fundraisers.</p><a href=#adultvol >Learn More Here!</a></li>";
        volOpportunitites[0].style.backgroundColor ="red";
    })
    volOpportunitites[0].addEventListener("mouseout", function(){
volOpportunitites[0].style.backgroundImage = savedstyle[0].backgroundImg;    });
});
