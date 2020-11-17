const mapper = {
    titleToClient: (json) => {
        return {
            title: json.Picabu_Title,
        }
    },
    postsToClient: (json) => {
        return {
            posts: json.Posts.map(it => {
                return {
                    id: it.Id,
                    title: it.Title,
                    content: it.Content,
                    rating: it.Rating,
                }
            })
        };
    },
}

export default mapper;