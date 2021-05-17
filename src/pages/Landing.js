import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import ImageSvg from '../assets/DrawKit/5SCENE.svg';
// import ImageSvg from '../assets/Peach/Characters/undraw_studying.svg';
// import style from './style.css'

const Landing = () => {
  return (
    <div>
      <section>
        <div className="circle"></div>
        
        <div className="content">
          <div className="textBox">
            <h2>It's not just coffee <br />It's <span>Starbuks</span></h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <Link to="login">Learn More</Link>
           
          </div>
          <div className="imgBox">
            <img src={ImageSvg} className="starbucks" />
          </div>
        </div>
        <ul className="thumb">
          <li><img src={ImageSvg}/></li>
          <li><img src={ImageSvg}/></li>
          <li><img src={ImageSvg}/></li>
        </ul>
      </section>
    </div>
  )
}
export default Landing
