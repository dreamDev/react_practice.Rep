import { createStore, combineReducers } from "redux";
import { profileReducer } from "./profileReducer";
import { dialogsReducer } from "./dialogsReducer";

// С помощью функции combineReducers связываем определенную часть стейта с определенным редьюсером и создаем общий store.
const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer
})

// Создаем store с помощью функции редакса createStore и передаем в него объект reducers
const store = createStore(reducers)

export default store