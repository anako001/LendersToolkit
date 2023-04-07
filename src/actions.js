import * as actions from "./actionTypes";

export const todoAdded = description => ({
    type: actions.TODO_ADDED,
    payload: {
        description: description
    }
});

export const todoRemoved = id => ({
    type: actions.TODO_REMOVED,
    payload: {
        id: id
    }
});