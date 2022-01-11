import React from 'react';
import Navigation from './Navbar';
import './styles.css';
import axios from 'axios';
import Mem from './images/memories.svg';
import {Link} from 'react-router-dom';
class Signup extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            email: '',
            password: '', 
            username: '',
            profileImg: ''
        }
        this.onChangeInput = this.onChangeInput.bind(this);
        this.signup = this.signup.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
    }
    onChangeInput = (e) => {
        const name = e.target.name; 
        const value = e.target.value; 
        this.setState({[name] : value});
        if(name === 'email')
        {
            let uname = ''; 
            for(let i = 0; i < value.length; i++)
            {
                if(value[i] === '@')
                {
                    break;
                }
                uname += value[i];
            }
            this.setState({username: uname});
        }
    }
    onFileChange = (e) => {
        this.setState({profileImg: e.target.files[0]})
        console.log(e.target.files[0]);
    }
    signup = (e) => {
        e.preventDefault(); 
        const formData = new FormData();
        formData.append('email', this.state.email); 
        formData.append('password', this.state.password); 
        formData.append('username', this.state.username);
        formData.append('profileImg', this.state.profileImg)
        axios.post('http://localhost:5000/users/addUser', formData)
        .then((res) => {
            console.log(res.data._id);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    render() {
        return (
            <div>
                <div className='signup'>
                    <div class="split left">
                        <div className='signin'>
                            <p>Already have an account? <Link to = '/signin'><a href="">Sign In</a></Link></p>
                        </div>
                        <div class="centered">
                            <div className='title'>
                                <h1>Welcome to TrackInsta</h1>
                            </div>
                            <p style={{fontSize:'1.25rem', color:'black', fontWeight:'bolder'}}>Never let your memories fade away!</p>
                            <form class="form-signin" style={{ color: 'black' }} onChange={this.onChangeInput}>
                                <input type="email" id="inputEmail" name = 'email' class="form-control" placeholder="Email address" required autofocus />
                                <input type="password" id="inputPassword" name = 'password' class="form-control" placeholder="Password" required />
                                <div style={{padding:'5px 5px 10px 5px'}}>
                                <label for="profilePic" style={{float:'left'}}>Profile picture</label>
                                <input type = "file" onChange = {this.onFileChange} filename = "profileImg"/>
                                </div>
                                <button class="signupButton" type="submit" onClick={this.signup}>Sign Up</button>

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
export default Signup;