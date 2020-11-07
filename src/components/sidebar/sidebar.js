const Sidebar = () => {
    return (
        <aside className='app__sidebar'>
            <div className="panel">
                <header className="panel-header">
                    <h4>Авторизация</h4>
                </header>
                <div className='panel-body'>
                    <form action="">
                        <div className="form-group">
                            <label className="form-label" htmlFor="login">Логин</label>
                            <input className="form-input" type="text" id="login" placeholder='Логин' />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="pass">Пароль</label>
                            <input className="form-input" type="password" id="pass" placeholder='Пароль' />
                        </div>
                    </form>
                </div>
                <footer className="panel-footer">
                    <button className='btn btn-primary'>Войти</button>
                </footer>
            </div>
        </aside>
    );
};

export default Sidebar;