const addInitialTokens = () => {
  localStorage.setItem('mealsToken', '1');
  localStorage.setItem('cocktailsToken', '1');
};

const inProgressSetup = () => {
  const inProgressRecipesState = {
    cocktails: {},
    meals: {},
  };
  localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipesState));
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
    const ingredients = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)

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
    return ingredients.slice(0, '+20');
  }
  const ingredients = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    .then((res) => res.json())
    .then(({ drinks }) => drinks);
  return ingredients.slice(0, '+20');
};
export const getInProgressRecipes = () => {
  let inProgress = localStorage.getItem('inProgressRecipes');
  if (!inProgress) {
    inProgressSetup();
    inProgress = localStorage.getItem('inProgressRecipes');
  }
  return JSON.parse(inProgress);
};
export const concludeItem = (type, id, name) => {
  const local = getInProgressRecipes();
  if (type === 'food') {
    const { meals } = local;
    const localEntries = Object.entries(meals);
    const recipe = localEntries.find((arr) => arr[0] === id);
    const newIngredients = recipe[1].filter((ingredient) => ingredient !== name);
    const newRecipe = {
      ...local,
      meals: {
        ...meals,
        [id]: newIngredients,
      },
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(newRecipe));
  } else {
    const { cocktails } = local;
    const localEntries = Object.entries(cocktails);
    const recipe = localEntries.find((arr) => arr[0] === id);
    const newIngredients = recipe[1].filter((ingredient) => ingredient !== name);
    const newRecipe = {
      ...local,
      cocktails: {
        ...cocktails,
        [id]: newIngredients,
      },
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(newRecipe));
  }
};
export const startRecipe = async (type, id) => {
  const jsonProgress = localStorage.getItem('inProgressRecipes');
  const progress = JSON.parse(jsonProgress);
  const { meals, cocktails } = progress;
  if (type === 'food') {
    const recipe = await getItemById('food', id);
    const entries = Object.entries(recipe[0]);
    const ingredients = entries
      .filter((arr) => /strIngredient/.test(arr[0]) && arr[1])
      .map((arr) => arr[1]);
    const newRecipe = {
      ...progress,
      meals: {
        ...meals,
        [id]: ingredients,
      },
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(newRecipe));
  } else {
    const recipe = await getItemById('drinks', id);
    const entries = Object.entries(recipe[0]);
    const ingredients = entries
      .filter((arr) => /strIngredient/.test(arr[0]) && arr[1])
      .map((arr) => arr[1]);
    const newRecipe = {
      ...progress,
      cocktails: {
        ...cocktails,
        [id]: ingredients,
      },
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(newRecipe));
  }
  return true;
};
export const getFavoriteRecipes = () => {
  let favorites = localStorage.getItem('favoriteRecipes');
  if (!favorites) {
    localStorage.setItem('favoriteRecipes', '[]');
    favorites = '[]';
  }
  return JSON.parse(favorites);
};

export const removeFavorite = (id) => {
  const favorites = getFavoriteRecipes();
  const newFavorites = favorites.filter((item) => item.id !== id);
  localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
};

export const addFavorite = async (type, id) => {
  const favorites = getFavoriteRecipes();
  const item = await getItemById(type === 'comidas' ? 'food' : 'drinks', id);

  let name = '';
  let image = '';

  if (type === 'comidas') {
    const { strMeal, strMealThumb } = item[0];
    name = strMeal;
    image = strMealThumb;
  } else {
    const { strDrink, strDrinkThumb } = item[0];
    name = strDrink;
    image = strDrinkThumb;
  }

  const {
    strArea,
    strCategory,
  } = item[0];

  const obj = {
    id,
    type: type === 'comidas' ? 'comida' : 'bebida',
    area: strArea ? `${strArea}` : '',
    category: strCategory,
    alcoholicOrNot: type === 'comidas' ? '' : 'Alcoholic',
    name,
    image,
  };

  const newFavorite = [...favorites, obj];
  localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorite));
};
