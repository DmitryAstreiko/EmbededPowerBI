import React from 'react';
import { MainPage } from './pages/MainPage';
import { Route } from 'react-router-dom'
import { AppHeader } from './AppHeader'
import css from './App.module.scss';
import Analytics from './pages/Analytics';

export const App = () => {
    return (
        <div className={ css.app }>
            <Route component={ AppHeader } />
            <main>
                <Route path="/" exact component={MainPage} />
                <Route path="/analytics" exact component={Analytics} />
            </main>
            <footer></footer>
        </div>
    );
}
