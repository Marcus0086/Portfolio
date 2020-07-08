import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Side from './sidebar';
import Front from './front';

class Navbar extends Component {
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
                <nav className="navbar navbar-dark bg-dark ">
                    <li className="navbar-brand">AddictoX</li>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search"
                            placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-warning my-2 my-sm-0" type="submit" href="#">Search</button>
                    </form>
                </nav>
                <Side />
                <body>
                    <Front />
                </body>
            </React.Fragment>
            );
    }
}

export default Navbar;