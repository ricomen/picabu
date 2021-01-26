import mapper from './mapper';

export const getTitle = () => {
    return fetch('/api/title')
            .then(response => response.json())
            .then(json => mapper.titleToClient(json));
};

export const getArticles = () => {
    return fetch('/api/posts')
    .then(response => response.json())
    .then(json => ({ postsLoaded: true, ...mapper.postsToClient(json)}))
};