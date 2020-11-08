import React from 'react';

const Article = () => {
    return (
        <article className="card">
            <figure className="card-image">
                <img src="https://www.placehold.it/200x200" alt="text" className="img-responsive" />
            </figure>
            <header className="card-header">
                <div className="card-title h5">...</div>
                <div className="card-subtitle text-gray">...</div>
            </header>
            <div className="card-body">
                Какой-то текст
            </div>
            <footer className="card-footer">
                <button className="btn btn-primary">Читать</button>
            </footer>
        </article>
    );
};

export default Article;