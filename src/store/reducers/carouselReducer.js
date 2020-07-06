import { GET_CAROUSEL } from "../types/types"

const initialState = {
    carousels: [
        { 
            name: "1",
            img: "https://i0.wampi.ru/2020/07/06/10877602_0.jpg"
        },
        { 
            name: "2",
            img: "https://i2.wampi.ru/2020/07/06/31689_140413.jpg"
        },
        {   
            name: "3",
            img: "https://ia.wampi.ru/2020/07/06/978-5-389-01666-8.jpg"
        }
    ]
}

export const carouselReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CAROUSEL: 
            return state
        default: return state
    }
    
}
