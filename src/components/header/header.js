import React from 'react';

const Header = (props) => {
    return (
        <header className='app__header'>
            <div className="input-group">
                <input className="form-input" type='search' id="search" placeholder='Найти' />
                <button className="btn btn-primary">Профиль</button>
            </div>
        </header>
    );
};

export default Header;

