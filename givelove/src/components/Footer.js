import footerlogo from '../image/footerlogo.png';
import './Footer.css';

const footer = () => {
    <div className='Footer'>
        <header>
            <img src={footerlogo} className="logo" alt="logo" />
            <p>footer</p>
        </header>
    </div>
}

export default footer;