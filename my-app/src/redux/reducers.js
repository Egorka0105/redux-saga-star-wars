import {combineReducers} from "redux";
import peopleReducer from "./slices/peopleSlice";

export const reducers = combineReducers({
    people: peopleReducer,
});