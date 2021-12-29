import {combineReducers, createStore} from 'redux';

export const ChangeNum = (state = 0, action) => {
    console.log("Action",action);
    switch(action.type){
        case "INCREMENT": return state + 1;
        case "DECREMENT": return state - 1;
        case "MULTIPLICATION" : return state * action.value;
        case "DIVISION" : return state / action.value;
        default: return state;
    }
}

export const MultDiv = (state = 1, action) => {
    console.log("Action",action);
    switch(action.type){
        case "MULTIPLICATION" : return state * action.value;
        case "DIVISION" : return state / action.value;
        default: return state;
    }
}

// const initialData = [{
//         list: "",
//         id: null
//     }]

const initialData = {
    list: [
    ]
}

// export const TodoList = (state = initialData, action) => {
//     console.log("Action",state);
//     switch(action.type){
//         case "ADD" : return state;
//         case "DEL" : 
//             return state = state.filter((data)=> data.id !==  action.id);
//         case "CHANGE" : return [...state, {list: action.value, id: new Date().getTime()}];
//         default: return state;
//     }
// }

export const TodoList = (state = initialData, action) => {
    console.log("Action",state);
    switch(action.type){
        case "ADD_LIST" : return state;
        case "DELETE_LIST" : 
        const NewArray = state.list.filter((data)=> data.id !==  action.id);
        console.log("NewArray: ",NewArray);
            return {
                ...state,
                list: NewArray
            } 
        case "CHANGE" : return {...state, list: [...state.list, {value: action.value, id: new Date().getTime()}]};
        default: return state;
    }
}


const rootReducer = combineReducers({
    ChangeNum,
    MultDiv,
    TodoList
}) 

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log("store: ", store);
console.log("rootReducer: ", rootReducer);