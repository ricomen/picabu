import { ARTICLES } from '../actions/articlesActions';

// начальный стейт редьюсера
const INIT_STATE = {
    postsLoaded: false,
    posts: null,
    errors: null
}

// функция для изменения стейта
export default function data(state = INIT_STATE, { type, payload }) {
    console.log('articles ' + type, payload)

    switch(type) {
        case ARTICLES.REQUEST: {
            return {
                ...INIT_STATE,
                errors: null,
            }
        }
        case ARTICLES.ERROR: {
            return {
                ...INIT_STATE,
                loading: false,
                errors: payload.errors,
            }
        }
        case ARTICLES.SUCCESS: {
            return {
                ...INIT_STATE,
                postsLoaded: true,
                content: payload.title,
            }
        }
        default: return state;
    }
}