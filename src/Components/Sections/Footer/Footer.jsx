
import './Footer.css'
const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4">

            <div className="div1">
                <div className='headpo'>
                    <h5>English</h5>
                    <h5>Deutsch</h5>
                    <h5>Italiano</h5>
                    <h5>Français</h5>
                    <h5>Español</h5>
                    <h5>日本語</h5>
                </div >
                <div className="div2">
                    <div className='div3'>
                        <div className='listss'>
                            <h5>Quick Links</h5>
                            <hr />
                            <ul className="list-unstyled">
                                <li>Home</li>
                                <li>BMW in your country</li>
                                <li>BMW Group Careers</li>
                                <li>EU Detergents Regulation</li>
                                <li>REACH Regulation</li>
                                <li>Compatibility Check</li>
                                <li>Accessories Update</li>
                                <li>Connected Test Vehicle</li>
                                <li>Service Page Charging Products</li>
                                <li>Cooperation Test Car</li>
                                <li>EU Battery Regulation</li>
                            </ul>
                        </div>
                        <div >
                            <h5>More BMW Websites</h5>
                            <hr />
                            <ul className="list-unstyled">
                                <li>BMW M</li>
                                <li>BMW M Motorsport</li>
                                <li>BMW Golfsport</li>
                                <li>BMW M Driving Experience</li>
                                <li>BMW Welt</li>
                                <li>BMW Group Classic</li>
                                <li>BMW Corporate/Direct Sales</li>
                                <li>BMW Group</li>
                                <li>BMW Group Culture</li>
                                <li>BMW ConnectedDrive Upgrades</li>
                            </ul>
                        </div>
                    </div>
                    <div className='div4'>
                        <div>
                            <h5>BMW.com</h5>
                            <hr />
                            <ul className="list-unstyled">
                                <li>About BMW.com</li>
                                <li>Contact</li>
                                <li>Cookies</li>
                                <li>Imprint</li>
                                <li>Legal Notice / Data Protection</li>
                            </ul>
                        </div>
                        <div>
                            <h5>Visit us on</h5>
                            <hr />
                            <ul className="list-unstyled">
                                <li>Facebook</li>
                                <li>X</li>
                                <li>Instagram</li>
                                <li>YouTube</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
            <div className='allRightReserved'>
                <h6>© BMW AG 2025</h6>
            </div>
        </footer >
    );
};

export default Footer;
