import { GET_MODAL } from "../types/types"


const initialState = {
    visible: false
}

export const modalReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_MODAL: 
            return state

        default: return state
    } 
}
