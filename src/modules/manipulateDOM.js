import { roundOff } from "./utils";

const condition = document.querySelector(".condition");
const location = document.querySelector(".location");
const degrees = document.querySelector(".degrees");
const feelsLike = document.querySelector(".feels-like");
const windMPH = document.querySelector(".wind-mph");
const humidity = document.querySelector(".humidity");

// Loading circle div
export const main = document.querySelector("main");
export const loadingElement = document.getElementById('loading');


export function fillElements(text1, text2, text3, text4, text5, text6) {
    condition.textContent = text1;
    location.textContent = text2;
    degrees.textContent = roundOff(text3);
    feelsLike.innerHTML = `FEELS LIKE: <span style="color:antiquewhite;">${roundOff(text4)}</span>`;
    windMPH.innerHTML = `WIND: <span style="color:antiquewhite;">${text5} m/h</span>`;
    humidity.innerHTML = `HUMIDITY: <span style="color:antiquewhite;">${text6}%</span>`;
}


// Use user input for api get
const input = document.getElementById('city');
export let userInput;

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        userInput = input.value;
    }
});


// Event listener for fahrenheit/celsius button
export let fahrenheitFlag = false;

export function addConvertButtonEventListener(celsToFa, faToCels) {
    const convertBtn = document.getElementById('convert');
    convertBtn.addEventListener('click', () => {
        fahrenheitFlag = !fahrenheitFlag;

        const degreesVal = parseFloat(degrees.textContent);
        const feelsLikeVal = parseFloat(feelsLike.textContent.split(" ")[2]);
        
        // Update the displayed value
        if (fahrenheitFlag) {
            degrees.textContent = celsToFa(degreesVal);
            feelsLike.innerHTML = `FEELS LIKE: <span style="color:antiquewhite;">${celsToFa(feelsLikeVal)}</span>`;
            degrees.classList.add("fahrenheit");
            feelsLike.classList.add("fahrenheit");
        } else {
            degrees.textContent = faToCels(degreesVal);
            feelsLike.innerHTML = `FEELS LIKE: <span style="color:antiquewhite;">${faToCels(feelsLikeVal)}</span>`;
            degrees.classList.remove("fahrenheit");
            feelsLike.classList.remove("fahrenheit");
        }
        
    });
}



