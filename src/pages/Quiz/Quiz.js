import React, { useEffect, useState } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './style.scss';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom'

const Quiz = () => {
    const [minutes, setMinutes] = useState(5);
    const [seconds, setSeconds] = useState(0);
    const [qIndex, setQIndex] = useState(0);
    const [numberOfQuestions, setNumberOfQuestions] = useState(0);
    const [isEnd, setIsEnd] = useState(false)
    const [newArr, setNewArr] = useState([]);
    const [clicked, setClicked] = useState([]);
    const [highlight, setHighlight] = useState(-1);
    const [high, setHigh] = useState({});


    const history = useHistory();


    useEffect(() => {

        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };


    }, [seconds])

    useEffect(() => {

        let subject = ["english", "mathematics", "physics"]

        axios({
            method: "POST",
            url: "http://localhost:11000/fetchQuizQuestions",
            data: { subjects: subject }
        }).then(response => {

            let data = JSON.stringify(response.data.question)
            setNewArr(response.data.question)
            setNumberOfQuestions(response.data.numberOfQuestions)

        }).catch(err => {
            console.log('ERR: ', err)
        })

    }, [])
    const percentage = 66;
    let options = ["Option A", "Option B", "Option C", "Option D"]


    const setCorrectOption = (id) => {
        setHighlight(-1)

        let currId = clicked.find(item => item.id === id)
        console.log('--id--' + JSON.stringify(currId) + '--IM--'+id)
        if (currId) {
            let nx = currId['index']
            console.log(nx)
            if (nx) {
                setHighlight(nx)
            } else {
                setHighlight(-1)
            }
        } else {
            setHighlight(-1)
        }

    }
    const handleNext = (id) => {
       setCorrectOption(id)
        if ((numberOfQuestions - 1) === qIndex) {
            setIsEnd(true)
            return
        }
        setQIndex(qIndex + 1)
        setHighlight(-1)

    }
    const handlePrev = (id) => {
          setCorrectOption(id)

        if (qIndex === 0) {
            return
        }
        if (isEnd) {
            setIsEnd(false)
        }
        setQIndex(qIndex - 1)

    }

    const handleEnd = () => {
        history.replace("/score")
    }

    const handleOption = (index, optionId) => {

        setHighlight(index)
        let nIndex = index;
        setHigh({ index, optionId })
        // console.log('JJJ: ', index)
        if (clicked.length === 0) {
            let compact = Object.assign({ id: optionId, index: nIndex })
            let newData = [...clicked, compact]
            setClicked(newData)

        } else {
            clicked.map((item, index) => {
                //  console.log('HHH:',item.id === optionId)
                if (item.id === optionId) {
                    let inx = clicked.findIndex(x => x.id === optionId)
                    let newSelected = clicked.filter(x => x.id !== optionId)


                    let compact = Object.assign({ id: optionId, index: nIndex })
                    let newData = [...newSelected, compact]
                    setClicked(newData)


                    console.log(clicked)
                    // setClicked(newData)
                    // console.log(index + " " + optionId + " index: " + inx)
                } else {
                    let compact = Object.assign({ id: optionId, index: nIndex })
                    // console.log('congruent', compact)
                    let newData = [...clicked, compact]
                    setClicked(newData)
                }

            })
        }

        //    console.log('===')
        // console.log('sttaus: ', clicked.filter(item => item.id && item.id.toString() === optionId.toString()) > 0)


        // console.log('**: ' +compact)
        // console.log('**2: ' +clicked)
    }

    return (
        <div className="quiz">
            <div className="section-1">
                <p className="name">{newArr.length - (qIndex + 1)} questions Left</p>
                <div>
                    <p>Time Remaining </p>
                    <div>
                        {minutes === 0 && seconds === 0
                            ? null
                            : <h1> {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                        }
                    </div>
                </div>
            </div>
            {/* <hr /> */}
            <div className="section-2">
                {/* <p>{newArr.length - (qIndex + 1)} questions Left</p> */}
                {/* <div className="time-section">
                    <p>Time Remaining</p>

                    <CircularProgressbar value={percentage} text={`${percentage}%`} className="progress" />
                </div> */}
            </div>
            <div className="section-3">
                {newArr.length && (newArr.length !== (newArr.length - 1)) && <p> {newArr[qIndex].question}</p>}
                <div className="answer-section">
                    {
                        newArr.length && newArr[qIndex].options.map((item, index) =>
                            <div key={index}
                                className="option-holder"

                                style={{
                                    backgroundColor: index === highlight ? "red" : null
                                }}
                                // style={{
                                //     backgroundColor: clicked.findIndex(x => x.index.toString() === index) > 0 && clicked.findIndex(x => x.id === newArr[qIndex]._id.toString()) > 0 ? "red" : null
                                // }}
                                onClick={() => handleOption(index, newArr[qIndex]._id)}
                            >
                                <input
                                    type="radio"
                                    value="MALE"
                                    name="gender" />
                                <p>{item}</p>
                            </div>)
                    }

                </div>
            </div>

            <div className="section-4">
                <button onClick={() => handlePrev((newArr[qIndex]._id))}>Previous</button>
                {isEnd ? <button onClick={handleEnd}>End</button> : <button onClick={() => handleNext(newArr[qIndex]._id)}>Next</button>}
            </div>


        </div>
    )
}
export default Quiz;