import React, { Component } from 'react';
import '../styles/FootNav.css';

class FootNav extends Component {
    render() {
        return (
            <div className="footerNav">
                Built and designed by <a id="footLink" href="https://ellaine.dev/" target="_blank" rel="noreferrer" >ellaine.dev</a>
            </div>
        );
    }
}

export default FootNav;
