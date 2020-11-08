import React, { Component } from 'react';
import 'spectre.css';
import './app.css';

import Header from '../components/header/HeaderComponent';
import Articles from '../components/article/ArticleComponent';
import Sidebar from '../components/sidebar/SidebarComponent';

import mapper from '../api/mapper';

class App extends Component {
    state = {
        title: 'Загрузочка...',
    }

    componentDidMount() {
        fetch('/api/title')
            .then(response => response.json())
            .then(json => this.setState(mapper.titleToClient(json)))
    }

    render() {
        const { title } = this.state;

        return (
            <>
                <h1>{title}</h1>

                <div className = "app">

                    <Header />

                    <Articles />

                    <Sidebar />

                </div >
            </>
        )
    }
}

export default App;