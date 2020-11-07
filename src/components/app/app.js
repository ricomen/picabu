import React from 'react';
import 'spectre.css';
import './app.css';

import Header from '../header';
import Articles from '../articles';
import Sidebar from '../sidebar';

const App = () => {
    return (
        <div className="app">

            <Header />

            <Articles />

            <Sidebar />

        </div>
    )
}

export default App;