import './Footer.css';
import logo from '../img/logo.svg'

function Footer() {
    return (
      <div className="footer">
        <div className='footer__column'>
          <div className='footer__row'>Навигация</div>
          <div className='footer__row'>туры</div>
          <div className='footer__row'>faq</div>
        </div>
        <div className='footer__column'>
          <div className='footer__row header__logo'>
            <img src={logo} alt='logo'/>
          </div>
          <div className='footer__row'></div>
          <div className='footer__row'></div>
        </div>
        <div className='footer__column'>
          <div className='footer__row'>Контакты</div>
          <div className='footer__row'></div>
        </div>
      </div>
    );
  }
  
  export default Footer;