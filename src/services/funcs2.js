import { getInProgressRecipes } from './funcs';

export const restoreItem = (type, id, name) => {
  const local = getInProgressRecipes();
  if (type === 'food') {
    const { meals } = local;
    const localEntries = Object.entries(meals);
    const recipe = localEntries.find((arr) => arr[0] === id);
    const newIngredients = [...recipe[1], name];
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
    const newIngredients = [...recipe[1], name];
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

export const removeInProgressItem = (type, id) => {
  const local = getInProgressRecipes();
  if (type === 'food') {
    const { meals } = local;
    const entries = Object.entries(meals);
    const newMeal = entries.filter((arr) => arr[0] !== id);
    const newRecipe = {
      ...local,
      meals: {
        ...newMeal,
      },
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(newRecipe));
  } else {
    const { cocktails } = local;
    const entries = Object.entries(cocktails);
    const newDrinks = entries.filter((arr) => arr[0] !== id);
    const newRecipe = {
      ...local,
      cocktails: {
        ...newDrinks,
      },
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(newRecipe));
  }
};

export const getDoneRecipes = () => {
  let local = localStorage.getItem('doneRecipes');
  if (!local) {
    local = '[]';
  }
  return JSON.parse(local);
};

export const doneRecipe = (info, type) => {
  const local = getDoneRecipes();
  let newRecipe = {};
  if (type === 'food') {
    const {
      idMeal,
      strArea,
      strCategory,
      strMeal,
      strMealThumb,
      strTags,
    } = info;
    newRecipe = {
      id: idMeal,
      type: 'comida',
      area: strArea,
      category: strCategory,
      alcoholicOrNot: '',
      name: strMeal,
      image: strMealThumb,
      doneDate: new Date(),
      tags: strTags,
    };
  } else {
    const {
      idDrink,
      strArea,
      strCategory,
      strDrink,
      strDrinkThumb,
      strTags,
    } = info;
    newRecipe = {
      id: idDrink,
      type: 'bebida',
      area: strArea,
      category: strCategory,
      alcoholicOrNot: '',
      name: strDrink,
      image: strDrinkThumb,
      doneDate: new Date().getDate(),
      tags: strTags,
    };
  }

  const newDoneRecipe = [...local, newRecipe];
  localStorage.setItem('doneRecipes', JSON.stringify(newDoneRecipe));
};

export const getListIngredients = async (type) => {
  let ingredients = [];
  if (type === 'food') {
    ingredients = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
      .then((res) => res.json())
      .then(({ meals }) => meals);
  } else {
    ingredients = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
      .then((res) => res.json())
      .then(({ drinks }) => drinks);
  }
  return ingredients.slice(0, +'12');
};
