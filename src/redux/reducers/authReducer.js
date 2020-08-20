// initial state
const initialState = {
    user: {}
}

// action types
const ADD_USER = 'ADD_USER';
const REMOVE_USER = 'REMOVE_USER';

// action creators
export function addUser(userObj) {
    return {
        type: ADD_USER,
        payload: userObj
    }
}

export function removeUser() {
    return {
        type: REMOVE_USER
    }
}

// reducer
export default function reducer(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case ADD_USER:
            return {
                ...state,
                user: payload
            }
        case REMOVE_USER:
            return initialState;
        default: return state;
    }
}