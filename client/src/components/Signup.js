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
            profileImg: ''
        }; 
        this.onChangeInput = this.onChangeInput.bind(this);
        this.signUp = this.signUp.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
    }
    onFileChange = (e) => {
        this.setState({profileImg: e.target.files[0]})
        console.log(this.state);
    }
    onChangeInput = (e) => {
        const name = e.target.name; 
        const value = e.target.value; 
        this.setState({[name] : value});
    }
    signUp = (e) => {
        e.preventDefault(); 
        // console.log(this.state);
        const formData = new FormData(); 
        formData.append("email", this.state.email); 
        formData.append("password", this.state.password); 
        formData.append("username", this.state.username); 
        formData.append("profileImg", this.state.profileImg);
        
        axios.post('http://localhost:5000/user/addUser', formData)
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
                    <form class="form-signin" onChange = {this.onChangeInput} encType='multipart/form-data'>
                        <img class="mb-4" src="https://img.icons8.com/color/50/000000/google-keep.png" alt="" width="72" height="72"/>
                        <h1 class="h3 mb-3 font-weight-normal">Sign up to InstaSnap</h1>
                        <label for="inputEmail" class="sr-only">Email address</label>
                        <input type="email" name = "email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
                        <label for="username" class="sr-only">Username</label>
                        <input type="text" name = "username" id="inputEmail" class="form-control" placeholder="Username" required autofocus/>
                        <label for="inputPassword" class="sr-only">Password</label>
                        <input type="password" name = "password" id="inputPassword" class="form-control" placeholder="Password" required/>
                        <label for="profilePic" class="sr-only">Profile picture</label>
                        <input type = "file" onChange = {this.onFileChange} filename = "profileImg"/>
                        <div style={{paddingTop:'2%', paddingBottom:'2%'}}></div>
                        <button class="signup" type="submit" onClick={this.signUp}>Sign Up</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default connect()(Signup);