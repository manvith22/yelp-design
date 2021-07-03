import React from 'react';
import styles from './SearchResult.module.css';
import {BussinessRating} from '../../../BussinessRating/BussinessRating';
export function SearchResult(){
    return(
        <div className={styles['search-result']}>
            <img src='https://via.placeholder.com/210' alt='bussiness content' className={styles['bussiness-image']}/>
            <div className={styles['bussiness-info']}>
               <h2 className="subtitle">burger place</h2>
               <BussinessRating/>
               <p>$$<span className="tag">Burger</span> <span className="tag">BBQ</span></p>
            </div>
            <div className={styles['contact-info']}>
                <p>+9123432543</p>
                <p>+9123432543</p>
                <p>+9123432543</p>
            </div>
        </div>
    );
}