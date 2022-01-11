import React from 'react';
import Navigation from './Navbar';
import './styles.css';
import {Link} from 'react-router-dom';
class Profile extends React.Component
{
    render()
    {
        return (
            <div>
                <div className='content'>
                    <nav class="navbar navbar-expand-lg navbar-light ">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#" style={{fontSize:'1.75rem', fontWeight:'bolder'}}><img src="https://img.icons8.com/ios/42/000000/journal.png"/> TrackInsta</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className='nav-item'>
                                        <a className='nav-link' href="">Siddharth.S.Chandran</a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href="">Create Post</a>
                                    </li>
                                </ul>
                                <ul class="navbar-nav">
                                    <li class="nav-item signup">
                                        <Link to = '/signup' style = {{textDecoration:'none'}}><a class="nav-link" href="#" style = {{color:'white'}}>Log Out</a></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className='content-main'>
                    <h1>Today</h1>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-4 col-md-4 col-sm-12 imgCol'>
                                <div class="card" style={{width: "20rem"}}>
                                    <img src="https://images.unsplash.com/photo-1641719516709-882d5ed5f66e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12 imgCol'>
                                <div class="card" style={{width: "20rem"}}>
                                    <img src="https://images.unsplash.com/photo-1641719516709-882d5ed5f66e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12 imgCol'>
                                <div class="card" style={{width: "20rem"}}>
                                    <img src="https://images.unsplash.com/photo-1641719516709-882d5ed5f66e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>  
                            <div className='col-lg-4 col-md-4 col-sm-12 imgCol'>
                                <div class="card" style={{width: "20rem"}}>
                                    <img src="https://images.unsplash.com/photo-1641719516709-882d5ed5f66e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className='content-main1'>
                    <h1>Today</h1>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-4 col-md-4 col-sm-12 imgCol'>
                                <div class="card" style={{width: "20rem"}}>
                                    <img src="https://images.unsplash.com/photo-1641719516709-882d5ed5f66e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12 imgCol'>
                                <div class="card" style={{width: "20rem"}}>
                                    <img src="https://images.unsplash.com/photo-1641719516709-882d5ed5f66e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12 imgCol'>
                                <div class="card" style={{width: "20rem"}}>
                                    <img src="https://images.unsplash.com/photo-1641719516709-882d5ed5f66e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>  
                            <div className='col-lg-4 col-md-4 col-sm-12 imgCol'>
                                <div class="card" style={{width: "20rem"}}>
                                    <img src="https://images.unsplash.com/photo-1641719516709-882d5ed5f66e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Profile;