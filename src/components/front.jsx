import React, { Component } from 'react';
import './frontpage.css';
//import 'bootstrap/dist/css/bootstrap.css';

class Front extends Component {
    render() {
        let d = new Date();
        let date = d.getDate();
        let month = d.toLocaleDateString ('default', { month: 'short' });
        let d1 = date + 1;
        let d2 = d1 + 1;
        return (
            <React.Fragment>
                <div id="container">
                    <div id="leftBox">
                        <div id="date">
                            <p id="day">{ date.toString() }</p>
                            <p id="month">{ month.toString() }</p>
                        </div>
                        <div id="text">
                            <h3>Previous Post</h3>
                            <p>Aman is a tatta!</p>
                        </div>
                    </div>
                    <div id="midBox">
                        <div id="date">
                            <p id="day">{ d1.toString() }</p>
                            <p id="month">{ month.toString() }</p>
                        </div>
                        <div id="text">
                            <h3>New Post</h3>
                            <p>Raghav is a hero!</p>
                        </div>
                    </div>
                    <div id="rightBox">
                        <div id="date">
                            <p id="day">{ d2.toString() }</p>
                            <p id="month">{ month.toString() }</p>
                        </div>
                        <div id="text">
                            <h3>Next Post</h3>
                            <p>Vedhant is a tatta but he has what it takes to be a hero!</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            );
    }
}


export default Front;