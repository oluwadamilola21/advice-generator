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
        handleLoader('done', data);
        localStorage.setItem('data', JSON.stringify(data));
        displayedData(data);
        console.log(data);
    })
    .catch(err => console.log(err)); // You can add UI for showing error message too if an error occrs (if you like)
 }

 function handleLoader (status, api_data) {
    const ls_data = JSON.parse(localStorage.getItem('data'));
     const loader = document.querySelector('#loader');
     loader.classList.remove('fadeout');
    if (status === 'loading') {
        loader.innerHTML = 'Loading...';
        loader.classList.add('block');
    } else {
        loader.innerHTML = `API returned advice ${api_data.slip.id} ${api_data.slip.id === ls_data.slip.id ? 'again': ''}`;
        loader.classList.add('fadeout');
    }
 }

 function getFromLocalStorage() {
    const ls_data = JSON.parse(localStorage.getItem('data'));
    if (ls_data) return displayedData(ls_data);
        else return displayedData({"slip": { "id": 205, "advice": "Try to not compliment people on things they don't control."}});
 }

window.addEventListener('load', function() {
    handleLoader('loading', null);
    getFromLocalStorage();
    fetchAdvice();
});

 click.addEventListener('click', function() {
    handleLoader('loading', null);
    getFromLocalStorage();
    fetchAdvice();
 });
