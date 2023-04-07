import * as actions from './actionTypes'
let lastId = 0;

export default function reducer(state = [], action) {
    switch (action.type) {
        case actions.TODO_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];
        case actions.TODO_REMOVED:
            return state.filter(todo => todo.id !== action.payload.id);
        default:
            return state;
    }
}