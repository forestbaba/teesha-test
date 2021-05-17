import React,{useState} from 'react'
import MenuIcon from '../../assets/menu.svg';
import CloseIcon from '../../assets/close.svg';
import Icon from '../../assets/DrawKit/1SCENE.svg'
import './style.css'
const Index =()=> {

    const [close, setClose] = useState(true)
    const [menuclass, updatemenuclass] = useState('close')
    const [navlink, setNavlin] = useState("nav-links")

    const navslide=()=>{

    }
    return (
        <div className="body">
        <nav>
            <div className="logo">
                <h4> Teesha</h4>
            </div>
            <ul className={navlink}>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Work</a></li>
                <li><a href="">Contack</a></li>
            </ul>
            <div className="burger" onClick={() => navlink === 'nav-links' ?  setNavlin('nav-active') : setNavlin( 'nav-links')}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
        </div>
    )
}
export default  Index;