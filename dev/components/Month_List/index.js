import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import Month from '../Month';
import Birthday_List from '../Birthday_List';
import styles from './style.css';
import { addName } from '../../actions'

const Month_List = () => {
    const [isShow, changeIsShow] = useState(false);
    const [isShowBirthday, changeisShowBirthday] = useState(false);
    const [names, changeNames] = useState([]);
    const dispatch = useDispatch();
    const list = useSelector(store => store);

    const changeBirthday = (names) => {
        changeNames(names)
        changeisShowBirthday(!isShowBirthday)
    }

    let Storage = localStorage.getItem('LIST');
    useEffect(() => {
        Storage && changeIsShow(true)
        !Storage && fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                dispatch(addName(data))
                changeIsShow(true)
            })
            .catch(console.error)
    }, []); 


	return (
			<>
            { isShow ?
				(<ul className={styles.list}>
                {
                    list        
                        .map((item) => (
                            item.names.length <3 ? (<li key = {item.id}><Month type="grey" onMouseEnter={()=>changeBirthday(item.names)} onMouseLeave={()=>changeBirthday([])}>{item.month}</Month></li>) :
                            (item.names.length >=3 && item.names.length <7) ? (<li key = {item.id}><Month type="blue" onMouseEnter={()=>changeBirthday(item.names)} onMouseLeave={()=>changeBirthday([])}>{item.month}</Month></li>) :
                            (item.names.length >=7 && item.names.length <11) ? (<li key = {item.id}><Month type="green" onMouseEnter={()=>changeBirthday(item.names)} onMouseLeave={()=>changeBirthday([])}>{item.month}</Month></li>) :
                            (<li key = {item.id}><Month type="red"onMouseEnter={()=>changeBirthday(item.names)} onMouseLeave={()=>changeBirthday([])}>{item.month}</Month></li>) 
                        ))
			    }
                </ul>) : (<h2>Please wait</h2>)
            }
            {
                isShowBirthday ? (			
				<Birthday_List names= {names}></Birthday_List>
                ): (<h3>Month not selected</h3>)
			}   

			</>
    )

}
export default Month_List;