const condition = document.querySelector(".condition");
const location = document.querySelector(".location");
const degrees = document.querySelector(".degrees");
const feelsLike = document.querySelector(".feels-like");
const windMPH = document.querySelector(".wind-mph");
const humidity = document.querySelector(".humidity");

export function fillElements(text1, text2, text3, text4, text5, text6) {
    condition.textContent = text1;
    location.textContent = text2;
    degrees.textContent = text3;
    feelsLike.innerHTML = `FEELS LIKE: <span style="color:antiquewhite;">${text4}</span>`;
    windMPH.innerHTML = `WIND: <span style="color:antiquewhite;">${text5} m/h</span>`;
    humidity.innerHTML = `HUMIDITY: <span style="color:antiquewhite;">${text6}%</span>`;
}