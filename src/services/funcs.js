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
