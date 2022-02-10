import React from "react";

import "./Footer.css";

const Footer = () => {
    const getYear = () => new Date().getFullYear();

    return (
        <footer className="mainfooter" role="contentinfo">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="text-center">&copy; {getYear()} - ventasOnline.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );

}

export default Footer;