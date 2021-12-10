import { getInProgressRecipes } from './funcs';

const restoreItem = (type, id, name) => {
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
        id: newIngredients,
      },
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(newRecipe));
  }
};

export default restoreItem;
