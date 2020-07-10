import { GET_MODAL } from "../types/modal";

export function getModal(modal) {
    return {
        type: GET_MODAL,
        payload: modal
    }
}

