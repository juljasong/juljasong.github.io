// localStorage.setItem / getItem

const form = document.querySelector(".js-form"); // class
const input = form.querySelector("input"); // tag
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function init() {
    loadName();
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS); 
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser); 
    }
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function paintGreeting(text) {
    const date = new Date();
    const hours = date.getHours();

    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);

    paintGreetingByTime(hours, text);
}

function paintGreetingByTime(hours, text) {
    if(hours >= 6 && hours < 12) {
        greeting.innerText = `Good Morning, ${text} !`;
    } else if(hours >= 12 && hours < 18) {
        greeting.innerText = `Good Afternoon, ${text} !`;
    } else if(hours >= 18 && hours < 24) {
        greeting.innerText = `Good Evening, ${text} !`;
    } else {
        greeting.innerText = `Good Night, ${text} !`;
    }
}


init();