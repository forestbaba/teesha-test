import React from 'react';
import SubjectWrapper from '../../containers/subjectWrapper';
import './style.scss';

const Index = () => {

    const subs = [{
        id: 1,
        abv: "eng",
        title: "English"
    },
    {
        id: 2,
        abv: "math",
        title: "Mathematics"
    },
    {
        id: 3,
        abv: "phy",
        title: "Physics",
    }]
    return (
        <div className="score-page">
            <div>
            <p>Your Score</p>
            <div className="section-1">
                <div className="child-container">
                    <div className="child-1">
                        <p>Percentage Score</p>
                        <div>
                            <h1>24</h1>
                            <h4>%</h4>
                        </div>
                    </div>
                    <div className="child-1">
                        <p>Question Score</p>
                        <div>
                            <h1>24</h1>
                            <h4> / 60</h4>
                        </div>
                    </div>
                </div>
                <div className="child-container-2">
                    <div className="child-1">
                        <p>Time accuracy</p>
                        <div>
                            <h1>44</h1>
                            <h4>%</h4>
                        </div>
                    </div>
                    <div style={{ width:150, display:"flex", flexDirection:"row" }} >{
                        subs.map(item =>   <SubjectWrapper subjects={subs} />)
                    }</div>
                    
                </div>

            </div>
            </div>
           
        </div>
    )
}
export default Index;