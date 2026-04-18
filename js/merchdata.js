let itemTotal = [0,0,0,0]
document.addEventListener('DOMContentLoaded', function(){
    console.log("Hello")
    let itemPrices = [6, 8, 13.00, 10.00]
    const inputList = document.querySelectorAll("#inputs");
    console.log(inputList)
    for (let i = 0; i<inputList.length; i++){
        console.log(itemPrices[i])
        inputList[i].addEventListener('change', (e) => changePrice(e, itemPrices[i], i))
    }
    document.querySelector('#checkout').addEventListener('click', function(){
        let grandTotal = calculateGrandTotal();

        alert("Your total is $" + grandTotal.toFixed(2) + ". Thank you for your purchase!")
    })
})
function changePrice(e, itemPrice, i){
    console.log(e.target.value);
    console.log(itemPrice);
let total = e.target.value * itemPrice;
let itemID = e.target.name + "Total"
console.log(itemID)
let section=document.querySelectorAll('#total')
section[i].innerHTML= "$" +total;
itemTotal[i] = total;
changeGrandTotal();
changeSubTotal();
changeTax();
}
function calculateTotal(){
    let unTaxedTotal = 0
for(let i=0; i<4;i++ ){
    unTaxedTotal = unTaxedTotal + itemTotal[i]
}
return unTaxedTotal;
}
function calculateTax(){
    let tax = calculateTotal() * .075;
    return tax;
}
function calculateGrandTotal(){
    let total = calculateTotal() + calculateTax();
    return total;
}
function changeGrandTotal(){
    let granTotal = calculateGrandTotal();
    let section=document.querySelector('#grandTotal');
    section.textContent = "$" + granTotal.toFixed(2);
}
function changeSubTotal(){
    let unTaxedTotal = calculateTotal();
    let section=document.querySelector('#subtotal');
    section.textContent = "$" + unTaxedTotal.toFixed(2);
}
function changeTax(){
    let tax = calculateTax();
    let section=document.querySelector('#tax');
    section.textContent = "$" + tax.toFixed(2);
}