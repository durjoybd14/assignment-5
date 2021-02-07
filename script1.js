function getMealList(){
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.meals){
            data.meals.forEach(meal => {
                html += `
                    <div class = "meal-item" data-id = "${meal.idMeal}">
                        <div class = "meal-img">
                            <img src = "${meal.strMealThumb}" alt = "food">
                        </div>
                        <div class = "meal-name">
                            <h3>${meal.strMeal}</h3>
                            <a href = "#" class = "recipe-btn">Get Recipe</a>
                        </div>
                    </div>
                `;
            });
            mealList.classList.remove('notFound');
        } else{
            html = "Sorry, we didn't find any meal!";
            mealList.classList.add('notFound');
        }

        mealList.innerHTML = html;
    });
}



///
document.getElementById('search-button').addEventListener('click', function () {
    const searchItem = document.getElementById('searchItem').value;
    const foodContainer = document.getElementById('foodContainer');


    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            for(let i=0; i<data.length;i++){
                const element =data[i];
                console.log(element)
                const foodBody = document.createElement('div');
                const foodInfo = `
            
                    <h3>${element.meals[0].strMeal}</h3>
                    `

                foodBody.innerHTML = foodInfo;
                foodContainer.appendChild(foodBody)
            };



        })


});