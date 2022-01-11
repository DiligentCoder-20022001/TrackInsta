import React from 'react'; 
import Navigation from './Navbar';
import './styles.css'; 
import Notes from './images/notes.svg';
import {Link} from 'react-router-dom';
class Home extends React.Component
{
    render()
    {
        return (
            <div>
                <Navigation/>
                <div className='content'>
                    <div className='container'>
                        <div className='row'>
                        <div className='col-lg-6 col-md-12'>
                        <div className='text'>
                            <div className='heading'>
                                <h1>Forgetting your <br/>best moments??</h1>
                            </div>
                            <p>Relive your memories by journalling them in TrackInsta!! <br/>Embark on your time travel right away!!</p>
                            <Link to = '/signup'><button className = 'tryBtn'>Try Now</button></Link> { " " }<Link to = '/signup'><button className = 'textBtn'>It's free!</button></Link>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <div className='image'>
                            <img src = {Notes} className='firstImg'/>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;