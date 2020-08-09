import { createStore } from 'redux'

//way of switching between actions
const SET_DESCRIPTION = ("setDescription");

export function setDescription(text) { return { type: SET_DESCRIPTION, text } }

const initialState = ""

//Takes in state and action to update state
function descriptionReducer(state = initialState, action) {
    switch (action.type) {
        case SET_DESCRIPTION:
            //Text is what is getting passed as action
            return action.text
        default:
            return state
    }
}

export const store = createStore(descriptionReducer)