import React, { Component } from 'react'

class Footer extends Component {

    handleClick(e) {
        e.preventDefault()
    }

    render() {
        const { handleClick } = this
        return (
            <div className="footer">
                <div className="container grid-xl">
                    <div className="columns mb-2">
                        <div className="column footer-logo-section col-1 col-lg-1 col-md-1 col-sm-12 col-xs-12 mb-2">
                            <img className="footer-logo" src="/static/img/footer-logo.png" alt="footer logo" />
                        </div>
                        <div className="column col-6 col-lg-6 col-md-1 col-sm-12 col-xs-12 footer-brand">
                            <h2>LES BOIS</h2>
                            <p>ENGINEERING INNOVATIONS</p>
                            <span>&copy; {new Date().getFullYear()} LES BOIS ENGINEERING INNOVATIONS</span>
                        </div>
                        <div className="column col-3 col-sm-12 col-xs-12 col-ml-auto footer-contact mt-2 mb2">
                            <button className="btn btn-default btn-huge"
                                    onClick={handleClick.bind(this)}>CONTACT US</button>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column col-12">
                            <ul className="footer-social">
                                <li>
                                    <a href="/">
                                        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <i className="fa fa-facebook-square" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
