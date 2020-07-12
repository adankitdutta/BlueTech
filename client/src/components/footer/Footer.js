import React from 'react';
import {Link} from 'react-router-dom';
import style from './footer.module.css';

function Footer(props) {
    return(
    <div className={style.footer}>
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/Landing">Home</Link></li>
                        <li><Link to="/Login">Login</Link></li>
                        <li><Link to="/LoginAdmin">Login as Admin</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
		              121, Clear Water Bay Road<br />
		              Salt Lake, Calcutta<br />
		              India<br />
		              <i className="fa fa-phone fa-lg"></i>: +91 12346 75678<br />
		              <i className="fa fa-fax fa-lg"></i>: +91 58765 84321<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">
                         confusion@food.net</a>
                    </address>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2020 BlueTech</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;