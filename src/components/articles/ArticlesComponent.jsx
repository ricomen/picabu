import React from 'react';
import Article from '../article/ArticleComponent';


const Articles = ({ posts, postsLoaded }) => {
    return (
        <section className='app__articles'>
            {postsLoaded 
                ? posts.map(post => <Article post={post} key={post.id} />)
                : <div className='loading loading-lg' />
            }
        </section>
    )
}

export default Articles;