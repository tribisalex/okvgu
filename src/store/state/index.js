import {combineReducers, createStore} from 'redux';
import {reducer as formReducer} from 'redux-form';
import MenuReducer from "./menu";

const reducers = combineReducers({
        MenuList: MenuReducer,
        form: formReducer
});

const store = createStore(reducers);

export default store;