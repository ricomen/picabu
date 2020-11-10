import React, { useState } from 'react';
import Article from '../article/ArticleComponent';


const Articles = (props) => {
    const { posts, postsLoaded } = props;
    return (
        <section className='app__articles'>
            {
                !postsLoaded && <div className='loading loading-lg'></div>
            }

            {
                postsLoaded && posts.map( post =>  <Article post={post} />)
            }

        </section>
    )
}

export default Articles;