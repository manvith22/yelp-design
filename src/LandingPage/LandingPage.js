import React from 'react';
import {TopNav} from './TopNav/TopNav';
import logo from '../assests/logo.png';
import styles from './LandingPage.module.css';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchSuggestions} from './SearchSuggestions/SearchSuggestions';
import useReactRouter from 'use-react-router';
export function LandingPage() {
    const {history} = useReactRouter();

    function search(term,location){
        const urlEncodeTerm = encodeURI(term);
        const urlEncodeLocation = encodeURI(location);
        history.push(`/search?find_desc=${urlEncodeTerm}&find_loc=${urlEncodeLocation}`);
    }

    return (
        <div className={styles.landing}>
        <div className={styles['search-area']}>
            <TopNav/>
            <img src={logo} className={styles.logo} alt={logo}/>
            <SearchBar search={search}/>
            <SearchSuggestions/>
        </div>
        </div>
    );
}
