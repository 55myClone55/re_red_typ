import { combineReducers } from "redux";
import { albumReducer } from "./albumReducer ";
import { todoReducer } from "./todoReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    user: userReducer,
   todo:todoReducer,
   album:albumReducer
})

export type RootState = ReturnType<typeof rootReducer>