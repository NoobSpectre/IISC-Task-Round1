// sets the item in the localstorage
export const _setItem = (key, value) => {
  localStorage.setItem(key, value);
};

// verifies if both the questions were answered else 2nd page does not mount
export const verify = () => {
  const a1 = localStorage.getItem('a1');
  const a2 = localStorage.getItem('a2');
  if (!a1) return false; // verifies if answer1 is in localstorage
  if (!a2) return false; // verifies if answer2 is in localstorage

  // both answer1 and answer2 is found in the localstorage
  return true;
};

// verifies by the key provided if the item already exists in localstorage
export const verifyItem = key => {
  if (localStorage.getItem(key)) return true;
  return false;
};

// returns data accordingly after receiving the key after verifying by the key
export const _getItem = key => {
  if (!verifyItem(key)) return null;
  const ans = localStorage.getItem(key);
  return ans;
};
