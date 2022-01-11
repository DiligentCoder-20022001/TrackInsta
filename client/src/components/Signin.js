import React from 'react';
import Navigation from './Navbar';
import './styles.css';
import Mem from './images/signin.svg';
import {Link} from 'react-router-dom';
class Signin extends React.Component {
    render() {
        return (
            <div>
                <div className='signup'>
                    <div class="split left">
                        <div className='signin'>
                            <p>Don't have an account? <Link to = '/signup'><a href="">Sign Up</a></Link></p>
                        </div>
                        <div class="centered">
                            <div className='title'>
                                <h1>Sign In to TrackInsta</h1>
                            </div>
                            <p style={{fontSize:'1.25rem', color:'black', fontWeight:'bolder'}}>Never let your memories fade away!</p>
                            <form class="form-signin" style={{ color: 'black' }}>
                                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
                                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />

                                <button class="signupButton" type="submit">Sign In</button>

                                <p class="mt-5 mb-3 text-muted">&copy; 2022-2030</p>
                            </form>
                        </div>
                    </div>

                    <div class="split right">
                        <img src = {Mem} className='mem'/>
                        <div class="centered">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Signin;