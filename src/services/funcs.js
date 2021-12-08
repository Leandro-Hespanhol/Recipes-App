const addInitialTokens = () => {
  localStorage.setItem('mealsToken', '1');
  localStorage.setItem('cocktailsToken', '1');
};

export const addEmail = (email) => {
  const strEmail = JSON.stringify({ email });
  localStorage.setItem('user', strEmail);
  addInitialTokens();
};

export const getItemFromLocalStorage = (item) => {
  const strItem = localStorage.getItem(item);
  return JSON.parse(strItem);
};

export const getByIngredients = async (ingredient) => {
  const ingredients = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then((res) => res.json())
    .then(({ drinks }) => drinks);
  return ingredients;
};

export const getByName = async (name) => {
  const ingredients = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then((res) => res.json())
    .then(({ drinks }) => drinks);
  return ingredients;
};

export const getByFirstLetter = async (letter) => {
  const ingredients = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
    .then((res) => res.json())
    .then(({ drinks }) => drinks);
  return ingredients;
};
