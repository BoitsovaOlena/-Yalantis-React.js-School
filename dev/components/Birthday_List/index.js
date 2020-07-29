import React from 'react';

import styles from './style.css';

const Birthday_List = ({names}) => {

	return (
		<ol className={styles.list}>
            {			
				names        
					.map((item) => (
                       <li key={item}>{item}</li>) 	
                    )

			}
		</ol>
    )

}
export default Birthday_List;