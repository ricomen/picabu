import React, { Component } from 'react';
import 'spectre.css';
import './app.css';

import Header from '../components/header/HeaderComponent';
import Articles from '../components/articles/ArticlesComponent';
import Sidebar from '../components/sidebar/SidebarComponent';

import mapper from '../api/mapper';

class App extends Component {
    state = {
        title: 'Загрузочка...',
        postsLoaded: false,
        posts: null,
    }

    componentDidMount() {
        fetch('/api/title')
            .then(response => response.json())
            .then(json => this.setState(mapper.titleToClient(json)));

        fetch('/api/posts')
            .then(response => response.json())
            .then(json => {
                this.setState(mapper.postsToClient(json))
                this.setState({ postsLoaded: true} );
            })
    }

    render() {
        const { title, posts, postsLoaded } = this.state;

        return (
            <>
                <h1>{title}</h1>

                <div className="app">

                    <Header />

                    <Articles
                        postsLoaded={ postsLoaded }
                        posts={ posts }
                    />

                    <Sidebar />

                </div >
            </>
        )
    }
}

export default App;