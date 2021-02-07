// main body part
document.getElementById('search-button').addEventListener('click', () => {
    const searchItem = document.getElementById('search-item').value;
    const foodContainer = document.getElementById('food-container');
    document.getElementById('search-item').value = "";

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`)
        .then(res => res.json())
        .then(data => {
            let mainContent = "";
            if (data.meals) {
                data.meals.forEach(meal => {

                    mainContent += `
                    <div class = "meal-item" >
                        <div class = "meal" id="details" onclick="mealDetails('${meal.strMeal}')">
                            <img src = "${meal.strMealThumb}" alt = "">
                            <h3>${meal.strMeal}</h3>
                        </div>
                    </div>
                `;

                });

            }

            else {
                mainContent = ` <h1>&#9785; Sorry, we didn't find any meal that you search</h1> 
                
                `;
            }

            foodContainer.innerHTML = mainContent;
        });

});


// details generate part
const mealDetails = name => {
    const ingredient = document.getElementById('ingredient');

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        .then(res => res.json())
        .then(data => {

            const mealInfo = `
            <img src = "${data.meals[0].strMealThumb}" alt = "">
            <h1>Name: ${data.meals[0].strMeal}</h1>
            <h4>Ingredients are: </h4>
            
            <ul>
            <li>${data.meals[0].strIngredient1}</li>
            <li>${data.meals[0].strIngredient2}</li>
            <li>${data.meals[0].strIngredient3}</li>
            <li>${data.meals[0].strIngredient4}</li>
            <li>${data.meals[0].strIngredient5}</li>
            <li>${data.meals[0].strIngredient6}</li>
            <li>${data.meals[0].strIngredient7}</li>
            <li>${data.meals[0].strIngredient8}</li>
            <li>${data.meals[0].strIngredient9}</li>
            <li>${data.meals[0].strIngredient10}</li>
            <li>${data.meals[0].strIngredient11}</li>
            <li>${data.meals[0].strIngredient12}</li>
            <li>${data.meals[0].strIngredient13}</li>
            <li>${data.meals[0].strIngredient14}</li>
        </ul>
            
            
            `
            ingredient.innerHTML = mealInfo;

        });

}