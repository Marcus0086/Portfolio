import React, { Component } from 'react';
import './sidebar.css';

class Side extends Component {
    state = {};
    openNav = () => {
        if (
            document.getElementById("mySidenav") &&
            document.getElementById("main")
            ) {
                document.getElementById("mySidenav").style.width = "250px";
                document.getElementById("main").style.marginLeft = "250px";
                document.body.style.backgroundColor = "white";
            }

    };
     closeNav = () => {
         if (
             document.getElementById("mySidenav") &&
             document.getElementById("main")
             ) {
                 document.getElementById("mySidenav").style.width = "0";
                 document.getElementById("main").style.marginLeft = "0";
                 document.body.style.backgroundColor = "white";
             }
  };

    render() {
        return (
            <React.Fragment>
                <body>
                    <div id="mySidenav" className="sidenav">
                        <a href="www.google.com" className="closebtn" onClick={this.closeNav}>&times;</a>
                        <a href="www.google.com">About</a>
                        <a href="www.google.com">Services</a>
                        <a href="www.google.com">Clients</a>
                        <a href="www.google.com">Contact</a>
                        <li>Follow us on github</li>
                        <li>Follw us on instagram</li>
                    </div>
                    <div id="main">
                        <span className="color" onClick={this.openNav}>&#9776;</span>
                    </div>
                </body>
            </React.Fragment>
            );
    }
}

export default Side;