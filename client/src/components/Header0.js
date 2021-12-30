import React from 'react';
class Header extends React.Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><img src="https://img.icons8.com/color/32/000000/google-keep.png"/> Track<span style={{color:'#FFC107'}}>Insta</span></a>
                        
                    </div>
                </nav>
            </div>
        )
    }
}
export default Header;