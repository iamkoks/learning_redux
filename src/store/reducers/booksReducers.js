import { CREATE_BOOK } from "../types/types"

const initialState = {
    books: [
        { name: "Война и Мир",
          author: "Толстой Лев Николаевич",
          cover: "https://i0.wampi.ru/2020/07/06/10877602_0.jpg"
        },
        { name: "451° по Фаренгейту",
          author: "Рей Брэдбери",
          cover: "https://i2.wampi.ru/2020/07/06/31689_140413.jpg"
        },
        { name: "Мастер и Маргарита",
          author: "Михаил Булгаков",
          cover: "https://ia.wampi.ru/2020/07/06/978-5-389-01666-8.jpg"
        }
    ]
}

export const booksReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_BOOK: 
            return {...state, books: state.books.concat(action.payload)}
        default: return state
    }
    
}