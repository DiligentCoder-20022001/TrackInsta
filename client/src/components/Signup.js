import React from 'react'; 
import './styles.css';
import {connect} from 'react-redux';
import axios from 'axios';
import FileBase64 from 'react-file-base64';
class Signup extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            email: '', 
            password: '', 
            username: '', 
            pic: ''
        }; 
        this.onChangeInput = this.onChangeInput.bind(this);
        this.signUp = this.signUp.bind(this);
    }
    onChangeInput = (e) => {
        const name = e.target.name; 
        const value = e.target.value; 
        this.setState({[name] : value});
    }
    signUp = (e) => {
        e.preventDefault(); 
        // console.log(this.state);
        const userData = {
            email : this.state.email, 
            password: this.state.password, 
            username : this.state.username, 
            pic : this.state.pic
        }
        axios.post('http://localhost:5000/user/addUser', userData)
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    render()
    {
        return (
            <div>
                <div className='main'>
                    <form class="form-signin" onChange = {this.onChangeInput}>
                        <img class="mb-4" src="https://img.icons8.com/color/50/000000/google-keep.png" alt="" width="72" height="72"/>
                        <h1 class="h3 mb-3 font-weight-normal">Sign up to InstaSnap</h1>
                        <label for="inputEmail" class="sr-only">Email address</label>
                        <input type="email" name = "email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
                        <label for="username" class="sr-only">Username</label>
                        <input type="text" name = "username" id="inputEmail" class="form-control" placeholder="Username" required autofocus/>
                        <label for="inputPassword" class="sr-only">Password</label>
                        <input type="password" name = "password" id="inputPassword" class="form-control" placeholder="Password" required/>
                        <label for="profilePic" class="sr-only">Profile picture</label>
                        <FileBase64
                            multiple={ true }
                            onDone={ (base64) => {this.setState({pic: base64})} } />
                        <div style={{paddingTop:'2%', paddingBottom:'2%'}}></div>
                        <button class="signup" type="submit" onClick={this.signUp}>Sign Up</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default connect()(Signup);