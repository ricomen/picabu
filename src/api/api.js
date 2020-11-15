import mapper from './mapper';

export const getTitle = () => {
    return fetch('/api/title')
            .then(response => response.json())
            .then(json => mapper.titleToClient(json));;
}