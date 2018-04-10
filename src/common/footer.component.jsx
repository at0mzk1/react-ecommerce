import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render(){
        return(
            <footer className="footer-distributed">
                <div className="footer-right">
                    <a href="/"><i className="fa fa-facebook"></i></a>
                    <a href="/"><i className="fa fa-twitter"></i></a>
                    <a href="/"><i className="fa fa-linkedin"></i></a>
                    <a href="/"><i className="fa fa-github"></i></a>
                </div>
                <div className="footer-left">
                    <p className="footer-links">
                        <a href="/">Home</a>
                        &nbsp;·&nbsp;
                        <a href="/">Classes</a>
                        &nbsp;·&nbsp;
                        <a href="/">Instances</a>
                        &nbsp;·&nbsp;
                        <a href="/">Items</a>
                    </p>
                    <p>Alto Mare &copy; 2017</p>
                </div>
            </footer>
        )
    }
}

export default Footer;