import {ADD, REMOVE} from "./actionTypes";

const initialSate = {
    todo: [],

}

export const reducer = (state = initialSate, action) => {
    switch (action.type) {
        case ADD : {
            return {
                todo: [...state.todo, action.payload]
            }
        }
        case REMOVE : {
           console.log(state.todo,'reducer');
           console.log(action.payload);
            return {
                todo: [...action.payload]
            }
        }

        default :
            return state
    }
}