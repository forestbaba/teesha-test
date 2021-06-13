import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import ImageSvg from '../../assets/DrawKit/5SCENE.svg';
// import ImageSvg from '../assets/Peach/Characters/undraw_studying.svg';
import landing from './landing.scss'

// https://andrejgajdos.com/authenticating-users-in-single-page-applications-using-node-passport-react-and-redux/
const Landing = () => {
  const history = useHistory();
  return (
    <div className="landing_parent">
      {/* <div className="circle"></div> */}

      <div className="content">
        <div className="textBox">
          <h2>It's not just a quiz, <br />It's <span style={{ color: "blue" }}>Teeshar</span></h2>
          <div className="p-holder">
            <p>** Teeshar is that app that gives you an edge over your fellow students.</p>
            <p>** You get to practice over 100+ questions and get comprehensive answers to all</p>
            <p>** It helps you achieve better results in and out of school
Teeshar is what you need to stand out in your studies.</p>
          </div>
          <button onClick={() => history.push('/subjects')} className="learn">Start taking tests</button>

        </div>
        <img src={ImageSvg} className="starbucks" />
      </div>
      {/* <ul className="thumb">
          <li><img src={ImageSvg}/></li>
          <li><img src={ImageSvg}/></li>
          <li><img src={ImageSvg}/></li>
        </ul> */}
    </div>
  )
}
export default Landing
