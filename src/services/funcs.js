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

export const getFirstRecipes = async (type) => {
  if (type === 'food') {
    return fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((res) => res.json())
      .then(({ meals }) => meals);
  }
  return fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    .then((res) => res.json())
    .then(({ drinks }) => drinks);
};

export const getByIngredients = async (type, ingredient) => {
  if (type === 'food') {
    const ingredients = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then((res) => res.json())
      .then(({ meals }) => meals);
    return ingredients;
  }
  const ingredients = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then((res) => res.json())
    .then(({ drinks }) => drinks);
  return ingredients;
};

export const getByName = async (type, name) => {
  if (type === 'food') {
    const ingredients = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      .then((res) => res.json())
      .then(({ meals }) => meals);
    return ingredients;
  }
  const ingredients = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then((res) => res.json())
    .then(({ drinks }) => drinks);
  return ingredients;
};

export const getByFirstLetter = async (type, letter) => {
  if (type === 'food') {
    const ingredients = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${letter}`)

      .then((res) => res.json())
      .then(({ meals }) => meals);
    return ingredients;
  }
  const ingredients = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
    .then((res) => res.json())
    .then(({ drinks }) => drinks);
  return ingredients;
};

export const getCategories = async (type) => {
  if (type === 'food') {
    const categories = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
      .then((res) => res.json())
      .then(({ meals }) => meals);
    return categories.slice(0, +'5');
  }
  const categories = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    .then((res) => res.json())
    .then(({ drinks }) => drinks);
  return categories.slice(0, +'5');
};

export const getCategoriesItens = async (type, categories) => {
  if (type === 'food') {
    const recipes = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categories}`)
      .then((res) => res.json())
      .then(({ meals }) => meals);
    return recipes;
  }
  const recipes = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categories}`)
    .then((res) => res.json())
    .then(({ drinks }) => drinks);
  return recipes;
};

export const getItemById = async (type, id) => {
  if (type === 'food') {
    const ingredient = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then(({ meals }) => meals);
    return ingredient;
  }
  const ingredient = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => res.json())
    .then(({ drinks }) => drinks);
  return ingredient;
};

export const getRandomItens = async (type) => {
  if (type === 'food') {
    const ingredients = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((res) => res.json())
      .then(({ meals }) => meals);
    return ingredients.slice(0, +'6');
  }
  const ingredients = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    .then((res) => res.json())
    .then(({ drinks }) => drinks);
  return ingredients.slice(0, +'6');
};
