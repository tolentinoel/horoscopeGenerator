import React, { Component } from 'react';
import '../styles/TopNav.css';
import Nav from 'react-bootstrap/Nav';

class TopNav extends Component {
    render() {
        return (
            <div className="topNavDiv">
                <Nav id="topNav" variant="pills" className="justify-content-end" activeKey="#form">
                    <Nav.Item>
                        <Nav.Link href="#form">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" href="https://github.com/tolentinoel/horoscopeGenerator" target="_blank">Repo</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" href="https://ellaine.dev/" target="_blank">ellaine.dev</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        );
    }
}

export default TopNav;
