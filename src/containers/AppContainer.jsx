import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'spectre.css';
import './app.css';

import Header from '../components/header/HeaderComponent';
import Articles from '../components/articles/ArticlesComponent';
import Sidebar from '../components/sidebar/SidebarComponent';

import mapper from '../api/mapper';

import { getTitleRequest } from '../actions/titleActions';
import { getArticlesRequest } from '../actions/articlesActions';

class App extends Component {

    
    componentDidMount() {
        const { getTitleRequest, getArticlesRequest } = this.props;
        getTitleRequest();
        getArticlesRequest();

    }

    render() {
        // console.log(this.props)
        const { title: { content: titleContent } } = this.props;

        return (
            <>
                <h1>{titleContent}</h1>

                <div className="app">

                    <Header />

                    {/* <Articles
                        postsLoaded={ postsLoaded }
                        posts={ posts }
                    /> */}

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

export default connect(mapStateToProps, {
    getTitleRequest,
    getArticlesRequest,
})(App)