let shepardList = ["Nichole Hood", "Downing Nightingale", "RJ Peck"];
document.addEventListener('DOMContentLoaded', function(){
    let donorList = document.getElementById("donorList");
    for (let i=0; i<shepardList.length; i++){
    donorList.innerHTML= donorList.innerHTML + "<li>" + shepardList[i] + "</li><br/>"
    
}
document.querySelector('#donationAmount').addEventListener('change', function(){
    let donationAmount = document.querySelector('#donationAmount').value;
    if (donationAmount == 0){
        document.querySelector('#oneTimeDonationSection').innerHTML = '<h2 class="fjalla-one-regular">Make a One-Time Donation</h2><label for="donationAmount">Donation Amount</label><br><input type="number" name="oneTimeDonation" id="oneTimeDonation" placeholder="Enter amount in dollars" min="1"><br> <button type="submit" class="donateButton">Donate Now!</button>';
    } else {
        document.querySelector('#oneTimeDonationSection').innerHTML = ' <button type="submit" class="donateButton">Donate Now!</button>';
    }
})
});
