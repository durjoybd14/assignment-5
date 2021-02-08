// Food Container Part
document.getElementById('search-button').addEventListener('click', () => {
    const searchItem = document.getElementById('search-item').value;
    if (searchItem === "") {
        alert("Search filed is required");
    }

    foodContainer();
});

const foodContainer = () => {
    const searchItem = document.getElementById('search-item').value;
    const foodContainer = document.getElementById('food-container');
    document.getElementById('search-item').value = "";

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`)
        .then(res => res.json())
        .then(data => {
            let foodContent = "";

            if (data.meals) {
                data.meals.forEach(meal => {

                    foodContent += `
                    <div class = "meal-item" >
                        <div class = "meal" onclick="mealDetails('${meal.strMeal}')">
                            <img src = "${meal.strMealThumb}" alt = "">
                            <h3>${meal.strMeal}</h3>
                        </div>
                    </div>
                    `;

                });

            }

            else {
                foodContent = ` <h1> &#9785; Sorry, we didn't find any meal that you search</h1> 
                
                `;
            }

            foodContainer.innerHTML = foodContent;
        })

        .catch(error => errorMessage('Sorry for this temporary problem, please try again later!'));

}

// Ingredient Generate Part
const mealDetails = name => {
    const ingredientDiv = document.getElementById('ingredient-div');

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        .then(res => res.json())
        .then(data => {

            const mealInfo = `
            <img src="${data.meals[0].strMealThumb}" alt="">
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
            ingredientDiv.innerHTML = mealInfo;

        })

        .catch(error => errorMessage('Something wrong, please try again later to know about ingredients!'));


}


// Error Message Part
const errorMessage = error => {
    document.getElementById('error-message').innerText = error;
}