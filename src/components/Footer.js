import React from 'react';
import '../components/Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';


const Footer = () => {
    return (
        <>
        <section className="first_footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg">
                        <h3>W3Layouts</h3>
                        <p>We help developers, designers and website owner's create stunning websites. We have been building a huge collection of website templates for every business and industry needs. Simply select your favourite template, edit, download and launch 🚀</p>
                        <div className="social"><FacebookIcon/><InstagramIcon/><TwitterIcon/><PinterestIcon/></div>
                    </div>
                    <div className="col-lg">
                        <span>Licenses</span><br />
                        <span>FAQ</span><br />
                        <span>Support</span>
                        <h5>Are you a Designer?</h5>
                        <span>Add Your Designs</span><br />
                        <span>Signup as Creator</span><br />
                        <span>Members</span>
                    </div>
                </div>
            </div>
        </section>
        <section className="sec_footer">
            <div className="container">
                <div className="row">
                <div className="col-lg footer_option">
                    <p>© All rights reserved by W3layouts limited</p>
                </div>
                <div className="col-lg footer_option">
                    <div>
                    <span>Help Center</span>
                    <span>Privacy Policy</span>
                    <span>Team & Conditions</span>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Footer
