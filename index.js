console.log("Javascript succefully connected!")
const plusBtn = document.querySelector('#plus-btn');
const resetBtn = document.querySelector('#reset-btn');
const minusBtn = document.querySelector('#minus-btn');

//grabbing the nessesary buttons

let count = 0;
// grabbing the counter text
const counterText = document.querySelector('#counter')

// grabb all the theme buttons
const themeBtns = document.querySelectorAll("theme buttons")


let inputBox = document.querySelector("#inputBox")
//writting out the nessesary functions
function increase() {
    count++;
    console.log(count);
    counterText.textContent = count;
}
function reset() {
    count = 0;
    console.log(count);
    counterText.textContent = count;

}
function decrease() {
    count--;
    console.log(count);
    counterText.textContent = count;

}

function selectTheme(event) {
    console.log(event.target);
    let theme = event.target.textContent;
    document.querySelector("body").className = theme;
    document.querySelector("main").className = theme;

    const buttons = document.querySelectorAll("button")

    for(let i = 0;i < buttons.length; i++){
        buttons[i].className = theme;

    }
}
function valueChecker() {
console.log(inputBox.value);
}
const enter = document.querySelector('.enterBtn')

// Add an event listener
plusBtn.addEventListener("click", increase);
resetBtn.addEventListener("click", reset);
minusBtn.addEventListener("click", decrease);



// add event listeners to for loops

for(let i = 0;i < themeBtns.length; i++){
    themeBtns[i].addEventListener("click", selectTheme)
};

inputBox.addEventListener('click', valueChecker)
enter.addEventListener('click', valueChecker)
