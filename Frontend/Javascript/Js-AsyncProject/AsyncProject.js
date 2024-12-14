let dizi =[]



fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  .then((res) => res.json())
  .then((data) => {
    dizi=data
    showScreen(data.meals)});

//console.log(data.meals));
// As json tell us either the data is object or array, in this, data is Object
//? Before heading always check if its array or object with console.log after json,
//? if its object exchange it with array.
//! We need to get the array inside the object which called meals

function showScreen(datas) {
  const mealsDiv = document.querySelector(".food");

  mealsDiv.innerHTML = ""; //clean

  datas.forEach((a) => {
    mealsDiv.innerHTML += `
<div class="col-sm-6 col-md-6">
<p>${a.strMeal}</p>
<img width="200px" src=${a.strMealThumb} alt="" </img>
</div>


  `;
  });
}
//! If you click on one of the flag will bring you to its country food

document.querySelectorAll("img").forEach(
  (a) =>
    (a.onclick = () => {
      //console.log(a.id);
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${a.id}`)
        .then((res) => res.json())
        .then((data) => showScreen(data.meals));
    })
);

//! Here whenever we input a letter on search place, it will bring all the foods 
//! which begins with that letter (by using onInput keyword)

document.querySelector("input").oninput = (e) => {

//console.log(e.target.value)

let data=dizi.meals.filter((a) => a.strMeal.toLowerCase().includes(e.target.value.toLowerCase()))

showScreen(data)
};