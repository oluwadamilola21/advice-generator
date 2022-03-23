window.onload = function(){
    const idNo = document.getElementById ('advice__no');
    const adviceText = document.getElementById('advice__text');
    const click = document.querySelector(".circle");

    click.addEventListener('click', function() {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        const advices = data.slip;
        idNo.textContent = advices.id;
        adviceText.textContent = advices.advice;
        console.log(data)
    })
    .catch(err => console.log(err))
    saveToStorage();
    });
    
    getFromStorage()
};



function saveToStorage (){
    let savedId = document.getElementById ('advice__no').innerText;
    localStorage.setItem("Id", savedId);
    let savedAdvice = document.getElementById('advice__text').innerText;
    localStorage.setItem("advice", savedAdvice);
}

function getFromStorage() {
    let getID = localStorage.getItem("Id");
    document.getElementById ('advice__no').innerText = getID;

    let getAdvice = localStorage.getItem("advice");
    document.getElementById('advice__text').innerText = getAdvice;
}

