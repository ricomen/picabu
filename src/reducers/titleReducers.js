import { TITLE } from '../actions/titleActions';

// начальный стейт редьюсера
const INIT_STATE = {
    loading: false,
    errors: null,
    content: 'Загрузка...',
}

// функция для изменения стейта
export default function data(state = INIT_STATE, { type, payload }) {
    switch(type) {
        case TITLE.REQUEST: {
            return {
                ...INIT_STATE,
                loading: true,
                errors: null,
            }
        }
        case TITLE.ERROR: {
            return {
                ...INIT_STATE,
                loading: false,
                errors: payload.errors,
            }
        }
        case TITLE.SUCCESS: {
            return {
                ...INIT_STATE,
                loading: false,
                content: payload.title,
            }
        }
        default: return state;
    }
}