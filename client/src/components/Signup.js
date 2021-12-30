import React from 'react'; 
import './styles.css';
import {connect} from 'react-redux';
class Signup extends React.Component
{
    render()
    {
        return (
            <div>
                <div className='main'>
                    <form class="form-signin">
                        <img class="mb-4" src="https://img.icons8.com/color/50/000000/google-keep.png" alt="" width="72" height="72"/>
                        <h1 class="h3 mb-3 font-weight-normal">Sign up to InstaSnap</h1>
                        <label for="inputEmail" class="sr-only">Email address</label>
                        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
                        <label for="inputPassword" class="sr-only">Password</label>
                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
                        <button class="signup" type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default connect()(Signup);