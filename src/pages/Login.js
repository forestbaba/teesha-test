import React, { useState, useEffect } from 'react';
// import style from './style.css';
import ImageSvg from '../assets/Peach/Characters/auth_img.jpg';
import Facebook from '../assets/facebook.svg';
import Google from '../assets/google.svg';
import { useHistory } from 'react-router-dom'
import GoogleLogin from 'react-google-login';
// import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import axios from 'axios';


const Login = ({location}) => {

    const history = useHistory();
    const [enableSignup, setUpSignup] = useState(false);
    const [firstname, sfirstname] = useState('')
    const [lastname, slastname] = useState('')
    const [email, semail] = useState('')
    const [password, spassword] = useState('')
    const [confirmpassword, sconfirmpassword] = useState('')
    const [locationParam, setLocationParam] = useState('')


    useEffect(() =>{
        console.log('KKKK' + location.state )
        setLocationParam(location.state)
    },[])

    const responseGoogleSuccess = (response) => {
        console.log('start')
        console.log('>>>', response)

        axios({
            method: "POST",
            url: "http://localhost:11000/api/v1/user/googleLogin",
            data: { tokenId: response.tokenId }
        }).then(response => {
            console.log(response)
            localStorage.setItem("logged_in_user", JSON.stringify(response.data))
            if(locationParam.appState === "quiz"){
               history.replace('/quiz')
            }
            console.log('}}}}}}', locationParam.appState === "quiz")
            history.replace('/subjects')

        }).catch(err => {
            console.log('ERR: ', err)
        })
    }

    const responseGoogleFailure = (response) => {
        console.log('Failure', response)

    }
    const responseFacebook = (response) => {
        console.log(response)
        axios({
            method: "POST",
            url: "http://localhost:11000/api/v1/user/facebookLogin",
            data: { accessToken: response.accessToken, userID: response.userID, picture: response.picture }
        }).then(response => {
            console.log('Facebook Login', response)
            history.push('/subjects')

        }).catch(err => {
            console.log('ERR: ', err)
        })
    }

    const showSignup = () => {
        setUpSignup(!enableSignup)

    }
    const handleAuth = (e) => {
        e.preventDefault()

        let data = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,

        }
        if(enableSignup){

        if (!email || email == "" || !password || password == "" || !firstname || firstname == ""
            || !lastname || lastname == "") {
            return alert("All fields are required ")
        }

        if (password !== confirmpassword) {
            alert('Confirm password and password do not match')
        } else {
            
            axios({
                method:"POST",
                url:"http://localhost:11000/api/v1/user/signup",
                data:data
            })
            .then(response =>{

                localStorage.setItem('token', response.data.token)
                console.log('kil'+response.data)

            }).catch(err =>{
                alert(`Error ${err}`)
            })
            console.log(data)
        }
    }else{
        if (!email || email == "" || !password || password == "") {
        return alert("All fields are required ")
    }
        axios({
            method:"POST",
            url:"http://localhost:11000/api/v1/user/login",
            data:data
        })
        .then(response =>{

            localStorage.setItem('token', response.data.token)
            console.log('go ahead' + response.data)
           history.push('/subjects')

        }).catch(err =>{
            alert(`Error: ${err.response.data.message}`)
        })
    }
    }
    return (
        <section id="login">

            <div className="contentBx">
                <div className="formBx">
                    <h2>{enableSignup ? "Sign up" : "Login"} </h2>
                    <form>
                        {enableSignup && <>
                            <div className='inputBx'>
                                <span>First Name</span>
                                <input type="text" name="firstname" value={firstname}
                                    onChange={e => sfirstname(e.target.value)} required />
                            </div>
                            <div className='inputBx'>
                                <span>Last Name</span>
                                <input type="text" name="lastname" value={lastname}
                                    onChange={e => slastname(e.target.value)} />
                            </div>
                        </>
                        }
                        <div className='inputBx'>
                            <span>Email</span>
                            <input type="text" name="email" value={email}
                                onChange={e => semail(e.target.value)} />
                        </div>
                        <div className='inputBx'>
                            <span>Password</span>
                            <input type="password" name="password" value={password}
                                onChange={e => spassword(e.target.value)} />
                        </div>
                        {
                            enableSignup && <>
                                <div className='inputBx'>
                                    <span>Confirm Password</span>
                                    <input type="password" name="confirmpassword"
                                        value={confirmpassword} onChange={e => sconfirmpassword(e.target.value)} />
                                </div>
                            </>
                        }


                        <div className='inputBx'>
                            <input type="submit" value={enableSignup ? "Sign up" : "Sign in"} name="" onClick={handleAuth} />
                        </div>
                        <div className='inputBx'>
                            {
                                !enableSignup ? <> <p>Don't have an account ? <a onClick={showSignup}>Sign up</a></p></> :
                                    <>  <p>Already have an account ? <a onClick={showSignup}>Login</a></p></>
                            }

                        </div>
                    </form>
                    <h3>Login with socials</h3>
                    <ul className="sci">
                        <GoogleLogin
                            clientId="330225335808-fcf9fspjiaemv6uv5ra8qqmpmnhtbu8r.apps.googleusercontent.com"
                            render={renderProps => (
                                <li><img src={Google} onClick={renderProps.onClick} disabled={renderProps.disabled} /></li>
                            )}
                            onSuccess={responseGoogleSuccess}
                            onFailure={responseGoogleFailure}
                            cookiePolicy={'single_host_origin'}
                        />


                        <FacebookLogin
                            appId="480330873301665"
                            callback={responseFacebook}
                            render={renderProps => (
                                <li><img src={Facebook} onClick={renderProps.onClick} /></li>
                            )}
                        />
                    </ul>
                </div>

            </div>
        </section>
    )
}
export default Login;