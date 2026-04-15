document.addEventListener("DOMContentLoaded", function(){
    
    let volOpportunitites = document.querySelectorAll(".Opportunities li");
    let savedstyle = [];
    for ( opp of volOpportunitites)
    { 
        const original= {
            backgroundImg: opp.style.backgroundImage,
            backgroundSizes: opp.style.backgroundSize,
            bgRepeat: opp.style.backgroundRepeat,
            bgHeight: opp.style.height,
            bgwidth: opp.style.width,
        }
        //save in array to access later 
        savedstyle.push(original);

    }
    let adult=  document.querySelector("#Adult");
    adult.addEventListener("click", function(){
       adult.innerHTML = "<p>Adult Opportunities</p><p>Adults can Volunteer at their local shelter for a single day, or they can sign up to be a regular volunteer. Volunteers can help with cleaning, feeding, and socializing the animals. Volunteers can also help with events and fundraisers.</p><a href=#adultvol >Learn More Here!</a>";
        adult.style.backgroundColor ="red";
        adult.style.backgroundImage= "none";
        adult.style.height="250px";
        adult.style.width="350px";
        adult.style.fontSize="10pt";
        adult.style.padding = "10rem 3rem 0 3rem";
    });
    adult.addEventListener("dblclick", function(){
adult.style.backgroundImage = savedstyle[0].backgroundImg;    
adult.style.backgroundSize =savedstyle[0].backgroundSizes ;
adult.style.backgroundRepeat= savedstyle[0].bgRepeat;
adult.style.height= savedstyle[0].bgHeight;
adult.style.width= savedstyle[0].bgwidth;
adult.style.padding="10rem; 3rem";

});
});
