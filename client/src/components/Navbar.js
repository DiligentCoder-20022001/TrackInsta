import React from 'react';
import './styles.css';
import { Navbar, Container, Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom';
class Navigation extends React.Component {
    render() {
        return (
            <div className='content'>
                <nav class="navbar navbar-expand-lg navbar-light ">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#" style={{fontSize:'1.75rem', fontWeight:'bolder'}}><img src="https://img.icons8.com/ios/42/000000/journal.png"/> TrackInsta</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                
                            </ul>
                            <ul class="navbar-nav">
                                <li class="nav-item signup">
                                    <Link to = '/signup' style = {{textDecoration:'none'}}><a class="nav-link" href="#" style = {{color:'white'}}>Sign Up</a></Link>
                                </li>
                                <li class="nav-item">
                                    <Link to = '/signin' style = {{textDecoration:'none'}}><a class="nav-link" href="#">Sign In</a></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Navigation;