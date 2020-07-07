import { GET_CAROUSEL } from "../types/types"

const initialState = {
    carousels: 
        [
            { 
                name: "1",
                img: "https://s5-goods.ozstatic.by/2000/389/685/10/10685389_0.jpg"
            },
            { 
                name: "2",
                img: "https://s3-goods.ozstatic.by/2000/784/582/10/10582784_0.jpg"
            },
            {   
                name: "3",
                img: "https://s3-goods.ozstatic.by/480/134/614/10/10614134_0_Tonkoe_iskusstvo_pofigizma_Paradoksalniy_sposob_zhit_schastlivo_Mark_Menson.jpg"
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
