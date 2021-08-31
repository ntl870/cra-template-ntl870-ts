import { combineReducers, createStore, Reducer } from "redux";
import reducer from "./reducers/reducer";

const rootReducer: Reducer = combineReducers({
  reducer,
});

export default createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
