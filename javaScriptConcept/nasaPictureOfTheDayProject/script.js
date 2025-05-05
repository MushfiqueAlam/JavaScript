const apiKey = '2upf63SU5xEFMzgZdKpCUlC1Zt2QzEUNUiuNFQKN';

document.addEventListener('DOMContentLoaded', () => {
    getCurrentImageOfTheDay();
    addSearchToHistory();
});

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const date = document.getElementById('search-input').value;
    getImageOfTheDay(date);
});


function getCurrentImageOfTheDay() {
    const currentDate = new Date().toISOString().split("T")[0];
    fetch(`https://api.nasa.gov/planetary/apod?date=${currentDate}&api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            displayImage(data);
        })
        .catch(error => {
            console.error('Error fetching current image:', error);
        });
}


function getImageOfTheDay(date) {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            displayImage(data);
            saveSearch(date);
            addSearchToHistory();
        })
        .catch(error => {
            console.error('Error fetching image for selected date:', error);
        });
}


function displayImage(data) {
    const container = document.getElementById('current-image-container');
    container.innerHTML = `
        <h3>${data.title}</h3>
        <img src="${data.url}" alt="${data.title}" style="max-width: 100%;">
        <p>${data.explanation}</p>
    `;
}


function saveSearch(date) {
    let searches = JSON.parse(localStorage.getItem('searches')) || [];
    if (!searches.includes(date)) {
        searches.push(date);
        localStorage.setItem('searches', JSON.stringify(searches));
    }
}


function addSearchToHistory() {
    const searches = JSON.parse(localStorage.getItem('searches')) || [];
    const historyList = document.getElementById('search-history');
    historyList.innerHTML = '';
    searches.forEach(date => {
        const listItem = document.createElement('li');
        listItem.textContent = date;
        listItem.addEventListener('click', () => {
            getImageOfTheDay(date);
        });
        historyList.appendChild(listItem);
    });
}
