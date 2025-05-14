// main.js

// Run the init() function when the page has loaded
window.addEventListener("DOMContentLoaded", init);

// Starts the program, all function calls trace back here
function init() {
	// Get the recipes from localStorage
	let recipes = getRecipesFromStorage();
	// Add each recipe to the <main> element
	addRecipesToDocument(recipes);
	// Add the event listeners to the form elements
	initFormHandler();
}

/**
 * Reads 'recipes' from localStorage and returns an array of
 * all of the recipes found (parsed, not in string form). If
 * nothing is found in localStorage for 'recipes', an empty array
 * is returned.
 * @returns {Array<Object>} An array of recipes found in localStorage
 */
function getRecipesFromStorage() {
	// A9. TODO - Complete the functionality as described in this function
	//           header. It is possible in only a single line, but should
	//           be no more than a few lines.

// 	for (let i = 0; i < localStorage.length; i++) {
//   let key = localStorage.key(i);
//   let value = localStorage.getItem(key);
//   allData[key] = JSON.parse(value);
// 	}
const empty = [];
if (localStorage.getItem("recipes")) 
{
	return (JSON.parse(localStorage.getItem("recipes")));
}
return empty;

}

/**
 * Takes in an array of recipes and for each recipe creates a
 * new <recipe-card> element, adds the recipe data to that card
 * using element.data = {...}, and then appends that new recipe
 * to <main>
 * @param {Array<Object>} recipes An array of recipes
 */
function addRecipesToDocument(recipes) {
	// A10. TODO - Get a reference to the <main> element
	// A11. TODO - Loop through each of the recipes in the passed in array,
	//            create a <recipe-card> element for each one, and populate
	//            each <recipe-card> with that recipe data using element.data = ...
	//            Append each element to <main>
	/*  "imgSrc": "string",
	 *                          "imgAlt": "string",
	 *                          "titleLnk": "string",
	 *                          "titleTxt": "string",
	 *                          "organization": "string",
	 *                          "rating": number,
	 *                          "numRatings": number,
	 *                          "lengthTime": "string",
	 *                          "ingredients": "string"
	 *                        }
	 * */
		// // A10. Get a reference to the <main> element
		const main_element = document.querySelector('main');
	  
		recipes.forEach(recipe_data => {
		  	const recipe_card = document.createElement('recipe-card');
	  		recipe_card.data = recipe_data;
			main_element.appendChild(recipe_card);
		});

		if (!recipes){ 
			return;
		}
	}



/**
 * Takes in an array of recipes, converts it to a string, and then
 * saves that string to 'recipes' in localStorage
 * @param {Array<Object>} recipes An array of recipes
 */
function saveRecipesToStorage(recipes) {
	// EXPLORE - START (All explore numbers start with B)
	// B1. TODO - Complete the functionality as described in this function
	//            header. It is possible in only a single line, but should
	//            be no more than a few lines.
	const str = JSON.stringify(recipes);
	localStorage.setItem('recipes', str);
}

/**
 * Adds the necessary event handlers to <form> and the clear storage
 * <button>.
 */
function initFormHandler() {
	// B2. TODO - Get a reference to the <form> element
	const ref = document.querySelector('form');

	// B3. TODO - Add an event listener for the 'submit' event, which fires when the
	//            submit button is clicked
	ref.addEventListener("submit", (event) => {
		event.preventDefault();
		

	// Steps B4-B9 will occur inside the event listener from step B3
	// B4. TODO - Create a new FormData object from the <form> element reference above
	const form_data = new FormData(ref);

	// B5. TODO - Create an empty object (we'll refer to this object as recipeObject to
	//            make this easier to read), and then extract the keys and corresponding
	//            values from the FormData object and insert them into recipeObject
	const recipe_object = {};
		for (const [key, value] 
			of form_data.entries()) { //entries is a method in documentation for key-pair 
				//extraction of properties in a given object - notes of Anu
			recipe_object[key] = value;
		}

	// B6. TODO - Create a new <recipe-card> element
	const recipe_card= document.createElement('recipe-card');

	// B7. TODO - Add the recipeObject data to <recipe-card> using element.data
		recipe_card.data = recipe_object;

	// B8. TODO - Append this new <recipe-card> to <main>
	const main_element = document.querySelector("main");
		main_element.appendChild(recipe_card);
	
		// B9. TODO - Get the recipes array from localStorage, add this new recipe to it, and
	//            then save the recipes array back to localStorage
	let all_recipe = getRecipesFromStorage();

		all_recipe.push(recipe_object);
		//addRecipesToDocument(recipe);

		saveRecipesToStorage(all_recipe); //? I think
	});

	// B10. TODO - Get a reference to the "Clear Local Storage" button
	const clear = document.querySelector(".danger");


	// B11. TODO - Add a click event listener to clear local storage button


	clear.addEventListener("click", (event) => {
	// Steps B12 & B13 will occur inside the event listener from step B11


	// B12. TODO - Clear the local storage
	localStorage.clear();

	// B13. TODO - Delete the contents of <main>
	const main_element = document.querySelector("main");
		main_element.innerHTML = '';
});
}
