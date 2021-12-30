import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './styles.css';
import {connect} from 'react-redux';
import Signup from './Signup';
class Home extends React.Component
{
    signup = (e) => {
        e.preventDefault(); 
        this.props.changeToSignup();
        console.log(this.state.status);
    }
    checkStatus()
    {
        if(this.props.status === 'home')
        {
            return (<div>
                <div>
                    <div className='main1'>
                        <div className='container'>
                            <div className='row'>
                            <div className='col-lg-6 col-md-12'>
                                    <div className='left'>
                                        <h1 style={{fontSize:'3rem', fontWeight:'bolder'}}>InstaSnap</h1>
                                        <p style={{fontSize:'1.2rem', fontWeight: 'bold'}}>Live your memories again :))</p>
                                        <hr/>
                                        <div>
                                            <p style={{fontSize:'1.5rem'}}>Journal your life by expressing your thoughts, photos over here and relive them whenever you want!!</p>
                                        </div>
                                        <div>
                                            <button className='signin'>Sign In</button> { " " } <button className='signup' onClick = {this.signup}>Sign Up</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-12'>
                                    <div className='right'>
                                    <div class="card">
                                        <img src="https://images.unsplash.com/photo-1640782321841-d67540111248?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">A day in the woods</h5>
                                            <p class="card-text">Hell of a day!! Would love to relive it again!!</p>
                                        </div>
                                    </div>
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
        if(this.props.status === 'signup')
        {
            return (<div>
                <div>
                    <div className='main1'>
                        <div className='container'>
                            <div className='row'>
                            <div className='col-lg-6 col-md-12'>
                                    <div className='left'>
                                        <h1 style={{fontSize:'3rem', fontWeight:'bolder'}}>InstaSnap</h1>
                                        <p style={{fontSize:'1.2rem', fontWeight: 'bold'}}>Live your memories again :))</p>
                                        <hr/>
                                        <div>
                                            <p style={{fontSize:'1.5rem'}}>Journal your life by expressing your thoughts, photos over here and relive them whenever you want!!</p>
                                        </div>
                                        <div>
                                            <button className='signin'>Sign In</button> { " " } <button className='signup' onClick = {this.signup}>Sign Up</button>
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
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);