let result = document.getElementById('res');
let button = document.querySelector("button");

function calcBmi(){

let WeightInput = parseInt(document.querySelector('.w').value);
let HeightInput = parseInt(document.querySelector('.h').value);
let final = bmi(WeightInput,HeightInput);

result.innerHTML = final.toFixed(1);

    if (final < 18.5) {
        category.innerHTML = ", You are Underweight!";
    } else if (final >= 18.5 && final < 25) {
        category.innerHTML = ", You are Healthy!";
    } else if (final >= 25 && final < 30) {
        category.innerHTML = ", You are Overweight!";
    } else {
        category.innerHTML = ", You are Obese!";
    }

}

 function bmi (WeightInput,HeightInput){
	return WeightInput / (HeightInput/100 * HeightInput/100);
};

button.addEventListener("click", calcBmi);


button.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        calcBmi();}
});
let category = document.getElementById('category');

