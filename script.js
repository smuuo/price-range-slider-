const rangeInput = document.querySelectorAll(".range-input input"),
const priceInput = document.querySelectorAll(".price-input input")
  progress = document.querySelector(".slider .progress");

let priceGap = 1000;

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    //getting two inputs value and parsing them to value
    let minValue = parseInt(priceInput[0].value),
      maxValue = parseInt(priceInput[1].value);

    if ((maxValue - minValue >= priceGap)&&maxValue<=10000) {
      if (e.target.className === "input-min") {
        //if active input is min input
        rangeInput[0].value = minValue;
        progress.style.left = (minValue / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxValue;
        progress.style.right = 100 - (maxValue / rangeInput[1].max) * 100 + "%";
      }
    } 
  });
});
rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      //getting two ranges value and parsing them to value
      let minValue = parseInt(rangeInput[0].value),
        maxValue = parseInt(rangeInput[1].value);
  
      if (maxValue - minValue < priceGap) {
        if (e.target.className === "range-min") {
          //if active slider is min slider
          rangeInput[0].value = maxValue - priceGap;
        } else {
          rangeInput[1].value = minValue + priceGap;
        }
      } else {
          priceInput[0].value=minValue;
          priceInput[1].value=maxValue;
        progress.style.left = (minValue / rangeInput[0].max) * 100 + "%";
        progress.style.right = 100 - (maxValue / rangeInput[1].max) * 100 + "%";
      }
    });
  });