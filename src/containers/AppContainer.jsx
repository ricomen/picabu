import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'spectre.css';
import './app.css';

import Header from '../components/header/HeaderComponent';
import Articles from '../components/articles/ArticlesComponent';
import Sidebar from '../components/sidebar/SidebarComponent';

import mapper from '../api/mapper';

import { getTitleRequest } from '../actions/titleActions';

class App extends Component {
    state = {
        postsLoaded: false,
        posts: null,
    }

    componentDidMount() {
        const { getTitleRequest } = this.props;
        getTitleRequest();

        fetch('/api/posts')
            .then(response => response.json())
            .then(json => {
                this.setState({ postsLoaded: true, ...mapper.postsToClient(json)} );
            })
    }

    render() {
        const { posts, postsLoaded } = this.state;
        const { title: { content: titleContent } } = this.props;

        return (
            <>
                <h1>{titleContent}</h1>

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

const mapStateToProps = (state) => {
    return {
        title: state.title
    }
}

export default connect(mapStateToProps, { getTitleRequest })(App)