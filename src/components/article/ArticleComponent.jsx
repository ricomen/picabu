import React from 'react';

const Article = (props) => {
    const { post } = props;
    return (
        <article className="card" key={post.id}>
            <figure className="card-image">
                <img src="https://www.placehold.it/200x200" alt="text" className="img-responsive" />
            </figure>
            <header className="card-header">
                <div className="card-title h5">{post.title}</div>
                <div className="card-subtitle text-gray">...</div>
            </header>
            <div className="card-body">
                {post.content}
            </div>
            <footer className="card-footer">
                <button className="btn btn-primary">Читать</button>
            </footer>
        </article>
    );
};

export default Article;