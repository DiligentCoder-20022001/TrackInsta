import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './styles.css';
import {connect} from 'react-redux';
import Signup from './Signup';
import Side1 from './images/side1.svg';
import Header0 from './Header0';
import Signin from './Signin';
class Home extends React.Component
{
    signup = (e) => {
        e.preventDefault(); 
        this.props.changeToSignup();
        console.log(this.state.status);
    }
    signIn = (e) => {
        e.preventDefault();
        this.props.changeToSignin();

    }
    checkStatus()
    {
        if(this.props.status === 'home')
        {
            return (<div>
                <div>
                    <Header0/>
                    <div className='main1'>
                        <div className='container'>
                            <div className='row'>
                            <div className='col-lg-6 col-md-12'>
                                    <div className='left'>
                                        <h1 style={{fontSize:'3rem', fontWeight:'bolder'}}>Track<span style={{color:'#FFC107'}}>Insta</span></h1>
                                        <p style={{fontSize:'1.2rem', fontWeight: 'bold'}}>Live your memories again :))</p>
                                        <hr/>
                                        <div>
                                            <p style={{fontSize:'1.5rem'}}>Journal your life by expressing your thoughts, photos over here and relive them whenever you want!!</p>
                                        </div>
                                        <div>
                                            <button className='signin' onClick={this.signIn}>Sign In</button> { " " } <button className='signup' onClick = {this.signup}>Sign Up</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-12'>
                                    <div className='right'>
                                    <img src = {Side1} className='sideImg'/>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        )
        }
        if(this.props.status === 'signup')
        {
            return (<div>
                <div>
                <Header0/>
                    <div className='main1'>
                        
                        <div className='container'>
                            <div className='row'>
                            <div className='col-lg-6 col-md-12'>
                                    <div className='left'>
                                        <h1 style={{fontSize:'3rem', fontWeight:'bolder'}}>Track<span style={{color:'#FFC107'}}>Insta</span></h1>
                                        <p style={{fontSize:'1.2rem', fontWeight: 'bold'}}>Live your memories again :))</p>
                                        <hr/>
                                        <div>
                                            <p style={{fontSize:'1.5rem'}}>Journal your life by expressing your thoughts, photos over here and relive them whenever you want!!</p>
                                        </div>
                                        <div>
                                            <button className='signin' onClick={this.signIn}>Sign In</button> { " " } <button className='signup' onClick = {this.signup}>Sign Up</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-12'>
                                    <div className='right'>
                                    <Signup/>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
        }
        if(this.props.status === 'login')
        {
            return (<div>
                <div>
                <Header0/>
                    <div className='main1'>
                        
                        <div className='container'>
                            <div className='row'>
                            <div className='col-lg-6 col-md-12'>
                                    <div className='left'>
                                        <h1 style={{fontSize:'3rem', fontWeight:'bolder'}}>Track<span style={{color:'#FFC107'}}>Insta</span></h1>
                                        <p style={{fontSize:'1.2rem', fontWeight: 'bold'}}>Live your memories again :))</p>
                                        <hr/>
                                        <div>
                                            <p style={{fontSize:'1.5rem'}}>Journal your life by expressing your thoughts, photos over here and relive them whenever you want!!</p>
                                        </div>
                                        <div>
                                            <button className='signin' onClick={this.signIn}>Sign In</button> { " " } <button className='signup' onClick = {this.signup}>Sign Up</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-12'>
                                    <div className='right'>
                                    <Signin/>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
        }
    }
    render()
    {
        console.log(this.props);
        return this.checkStatus();
    }
}
const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        status: state.status
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeToSignup : () => {
            dispatch({type: 'signup'});
        },
        changeToSignin : () => {
            dispatch({type: 'login'})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);