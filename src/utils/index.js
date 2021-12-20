export const loadingPlaceholder = {
  name: "Loading...",
  id: "0",
  ingredients: {},
  volume: {
    volume: "",
    unit: ""
  }
};

export const noDataPlaceholder = {
  name: "No data found.",
  id: "0",
  ingredients: {},
  volume: {
    volume: "",
    unit: ""
  }
};




export const saveState = (state) =>
{
  try
  {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cart', serializedState);
  }
  catch
  {
    // We'll just ignore write errors
  }
};




export const loadState = () =>
{
  try
  {
    const serializedState = localStorage.getItem('cart');
    if (serializedState === null)
    {
      return [];
    }
    return JSON.parse(serializedState);
  }
  catch (error)
  {
    return [];
  }
};