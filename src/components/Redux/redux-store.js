import {createStore,combineReducers} from 'redux'
import { reducerDialog } from "../reducerDialog"; 
import {reducerPost} from '../reducerPost'
import { reducerUsers } from '../reducerUsers';
import { reducerFreinds } from '../reducerFreinds';

let reducers = combineReducers({
    profilePage: reducerPost,
    dialogsPage : reducerDialog,
    usersPage: reducerUsers,
    freindsPage:reducerFreinds
})


let store = createStore(reducers)


export default store;

