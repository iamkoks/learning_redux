import { GET_CAROUSEL } from "../types/carousel";

export function getCarousel(carousel) {
    return {
        type: GET_CAROUSEL,
        payload: carousel
    }
}