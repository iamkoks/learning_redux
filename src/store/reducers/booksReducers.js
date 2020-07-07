import { CREATE_BOOK } from "../types/types"

const initialState = {
    books: [
        { 
          id: 0,
          name: "Война и Мир",
          author: "Толстой Лев Николаевич",
          cover: "https://i0.wampi.ru/2020/07/06/10877602_0.jpg"
        },
        { 
          id: 1,
          name: "451° по Фаренгейту",
          author: "Рей Брэдбери",
          cover: "https://i2.wampi.ru/2020/07/06/31689_140413.jpg"
        },
        { 
          id: 2,
          name: "Мастер и Маргарита",
          author: "Михаил Булгаков",
          cover: "https://ia.wampi.ru/2020/07/06/978-5-389-01666-8.jpg"
        },
        { 
          id: 3,
          name: "Хочу и буду.",
          author: "Михаил Лабковский",
          cover: "https://s3-goods.ozstatic.by/2000/784/582/10/10582784_0.jpg"
        },
        { 
          id: 4,
          name: "НЕ ТУПИ.",
          author: "Джен Синсеро",
          cover: "https://s5-goods.ozstatic.by/480/829/915/10/10915829_0_NE_TUPI_Tolko_tot_kto_ezhednevno_rabotaet_nad_soboy_zhivet_zhiznyu_mechti_Dzhen_Sinsero.jpg"
        },
        { 
          id: 5,
          name: "Пиши, сокращай",
          author: "Максим Ильяхов, Людмила Сарычева",
          cover: "https://s4-goods.ozstatic.by/480/756/534/10/10534756_0_Pishi_sokraschay_Kak_sozdavat_silniy_tekst_Maksim_Ilyahov_Lyudmila__Saricheva.jpg"
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
