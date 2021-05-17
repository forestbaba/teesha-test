import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './style.scss';

const Quiz = () => {
    const percentage = 66;
    let options=["Option A","Option B","Option C","Option D"]

    return (
        <div className="quiz">
            <div className="section-1">
                <p className="name">Yewande Lawson</p>
                <div>
                    <p>Percentage Total completed</p>
                    <ProgressBar variant="info" now={100} />

                </div>
            </div>
            <hr/>
            <div className="section-2">
                <p>7 questions Left</p>
                <div className="time-section">
                    <p>Time Remaining</p>
                    <CircularProgressbar  value={percentage} text={`${percentage}%`} className="progress"/>
                </div>
            </div>
            <div className="section-3">
                <p>Doodles are the fun, surprising, and sometimes spontaneous changes that are ... For them, creating doodles has become a group effort to enliven</p>
                <div className="answer-section">
                    
                        {
                            options.map(item => <div className="option-holder">
                                <input type="radio" value="MALE" name="gender" />
                                 <p>{item}</p></div> )
                        }
                    
    
                </div>
            </div>

            <div className="section-4">
                <button>Previous</button>
                <button>Next</button>
            </div>


        </div>
    )
}
export default Quiz;