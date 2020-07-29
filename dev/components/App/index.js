import React from 'react';
import Title from '../Title';
import Month_List from '../Month_List';
import styles from './style.css';



const App = () => {
    return (
        <div className={styles.wrapp}>
            <Title />
            <Month_List />
        </div>
    )
 
}

export default App;