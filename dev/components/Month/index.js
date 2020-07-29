import React from 'react';
import styles from './style.css';

const Month = ({type, children, ...otherProps}) => (
    <button 
     className={type ? `${styles.button} ${styles[`button_${type}`]}` : `${styles.button}`}
     {...otherProps}
    >
        {children}
    </button>
);



export default Month;