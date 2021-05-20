import React, { useState, } from 'react';
import style1 from './style1.css';
import { subject_item } from './subjects'
import {useHistory} from 'react-router-dom'
import SubjectWrapper from '../../containers/subjectWrapper';

const Subject = () => {

    const history = useHistory()

    const [select, setSelect] = useState([])


    const handleClick=(id)=>{
        let index = select.filter(i => i === id) 
        if(index.length > 0){
            let newArr = select.filter(i => i !== id)
            setSelect(newArr)
        }else{
            let newSele = [...select, id]
            setSelect(newSele)
        }
    }

    const [subjects] = useState(subject_item)
    return (
        <div style={{ display:"flex",flexDirection:"column",alignItems:"center",  justifyContent:'center' }}>
            <div className="subject_container">
                <div className="imgBx">
                </div>
                <h2>Subject</h2>


                <div className="subject_wrapper">
                    {
                        subjects.map((item, index) => {
                            return (
                                <div className='subject_item_wrapper' onClick={()=>handleClick(item.id)}>
                                    <div className={select.includes(item.id) ? "icon_wrapper select" : "icon_wrapper"}>{item.img ? <img src={item.img} style={{ width: 40, color: "red" }} /> : 'please'}</div>
                                    <p>{item.title.length > 8 ? item.title.substring(0, 10) + "..." : item.title}</p>
                                </div>
                            )
                        })
                    }

                </div>



            </div>
        <button style={{ width:150 }} onClick={ () => history.push('/quiz')}>Start Test</button></div>
    )
}
export default Subject;