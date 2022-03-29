const idNo = document.getElementById ('advice__no');
const adviceText = document.getElementById('advice__text');
 const click = document.querySelector(".circle");

 function displayedData (data) {
    const advices = data.slip;
    idNo.textContent = advices.id;
    adviceText.textContent = advices.advice;
 }

 function fetchAdvice () {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('data', JSON.stringify(data));
        displayedData(data);
        console.log(data);
    })
    .catch(err => console.log(err));
 }

 function getFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('data'));
    if (data) return displayedData(data);
        else return displayedData({"slip": { "id": 205, "advice": "Try to not compliment people on things they don't control."}});
 }

window.onload = function() {
    getFromLocalStorage();
    fetchAdvice();
}

 click.addEventListener('click', function() {
    getFromLocalStorage();
    fetchAdvice();
 });
