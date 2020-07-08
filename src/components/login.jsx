import React, { Component } from 'react';
import './login.css';
//import "bootstrap/dist/css/bootstrap.css"

class Login extends Component {
    render() {
        return (
            <div>
                <body>
                    <form className="box" action="next.php" method="post">
                        <h1 id="p">LOGIN</h1>
                        <input type="text" name="" placeholder="USERNAME"/>
                        <input type="password" name="" placeholder="PASSWORD"/>
                        <input type="submit" name="" value="LOGIN"/>
                    </form>
                </body>
            </div>
            );
    }
}

export default Login;