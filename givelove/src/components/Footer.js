import footerlogo from '../image/footerlogo.png';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className='Footer'>
                <header>
                    <img src={footerlogo} className="logo" alt="logo" />
                </header>
            </div>
        </>
    )
}

export default Footer;