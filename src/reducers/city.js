export default function city(state = [], action) {
  if (action.type === "ADD_CITY") {
    return [...state, action.payload];
  } else if (action.type === "DELETE_CITY") {
    return state.filter(
      (city) =>
        city.toLowerCase().split(" ").join("") !==
        action.payload.toLowerCase().split(" ").join("")
    );
  } else {
    return state;
  }
}
