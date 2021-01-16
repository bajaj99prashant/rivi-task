export const addCity = (city) => {
  return { type: "ADD_CITY", payload: city };
};

export const deleteCity = (city) => {
  return { type: "DELETE_CITY", payload: city };
};
