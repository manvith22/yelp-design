import React from 'react';
import styles from './SearchResultsSummary.module.css';

export function SearchResultsSummary(){
    return(
        <div className={styles.container}>
           <div className={styles['search-summary']}>
             <h1 className='subtitle'><strong>Burgers</strong> berlin</h1>
             <p>Show 1 to 20 out of 500 Results</p>
        </div>
        <div className={styles.filters}>
        <button className="button">
          <span className="icon">
                <i className="fas fa-sliders-h"></i>
         </span>
         <span>All filters</span>
        </button>
        <div className="buttons has-addons">
           <button className="button">$</button>
           <button className="button">$$</button>
           <button className="button">$$$</button>
           <button className="button">$$$$</button>
        </div>
        <button className="button">
          <span className="icon">
                <i className="far fa-clock"></i>
         </span>
         <span>Open now</span>
        </button>
        <button className="button">
          <span className="icon">
                <i className="fas fa-dollar-sign"></i>
         </span>
         <span>Cash back</span>
        </button>
        </div>
        </div>
    );
}