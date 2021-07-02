import React from 'react';
import styles from './SearchBar.module.css';

export function SearchBar() {
    return(
        <div>
            <div className="field has-addons">
               <p className="control">
                   <button className="button is-static is-medium">Search</button>
               </p>
               <p className="control">
                  <input className={`input is-medium ${styles['input-control']}`} type="text" placeholder="burgers,spas,barber,bars"/>
               </p>
               <p className="control">
                   <button className="button is-static is-medium">Near</button>
               </p>
               <p className="control">
                  <input className={`input is-medium ${styles['input-control']}`} type="text" placeholder="where"/>
               </p>
               <button className={`button is-medium ${styles['search-bar']}`}>
                 <span className={`icon is-small ${styles['search-icon']}`}>
                   <i className="fas fa-search"></i>
                 </span>
               </button>
           </div>
        </div>
    );
}