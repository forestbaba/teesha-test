import React from 'react';
// import style from './style.css';
import ImageSvg from '../assets/Peach/Characters/auth_img.jpg';
import Facebook from '../assets/facebook.svg';
import Google from '../assets/google.svg';
import { useHistory} from 'react-router-dom'

const  Login =()=> {
    const history = useHistory();
    return (
            <section id="login">
                <div className="imgBx">
                    <img src={ImageSvg}/>
                </div>
                <div className="contentBx">
                    <div className="formBx">
                        <h2 >Login</h2>
                        <form>
                            <div className='inputBx'>
                                <span>Email</span>
                                <input type="text" name="" />
                            </div>
                            <div className='inputBx'>
                                <span>Password</span>
                                <input type="password" name="" />
                            </div>
                            {/* <div className="remember">
                                <label><input type="checkbox" name=""/>Remember Me</label>
                            </div> */}
                            <div className='inputBx'>
                                <input type="submit" value="Sign in" name="" onClick={() => history.push('/subjects')}/>
                            </div>
                            <div className='inputBx'>
                                <p>Don't have an account ? <a href="">Sign up</a></p>
                            </div>
                        </form>
                        <h3>Login with socials</h3>
                        <ul className="sci">
                            <li><img src={Google}/></li>
                            <li><img src={Facebook}/></li>
                        </ul>
                    </div>

                </div>
            </section>
    )
}
export default Login;