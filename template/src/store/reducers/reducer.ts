export interface action {
  type: string;
}
const initialState: number = 0;

const reducer = (state = initialState, action: action) => {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      return state;
  }
};

export default reducer;
