import React from 'react';
import './styles.css'; 
import {Link } from 'react-router-dom';
class Create extends React.Component
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
                <div className='content'>
                    <div class="banner">
                        <input type="file" accept="image/*" id="banner-upload" hidden/>
                        <label for="banner-upload" class="banner-upload-btn"><img src="https://img.icons8.com/ios/50/000000/upload.png"/></label>
                    </div>
                    <div class="blog">
                        <textarea type="text" class="title" placeholder="Moment of the day..."></textarea>
                        <textarea type="text" class="article" placeholder="Start Journalling here..."></textarea>
                    </div>
                    <div class="blog-options">
                        <button class="btn dark publish-btn">publish</button>
                        <input type="file" accept="image/*" id="image-upload" hidden/>
                        <label for="image-upload" class="btn grey upload-btn">Upload Image</label>
                    </div>
                </div>
            </div>
        )
    }
}
export default Create;