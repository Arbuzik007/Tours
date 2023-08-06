import './Header.css';
import logo from '../img/logo.svg'

function Header() {
    return (
      <div className="header">
        <div className='header__logo'>
          <img src={logo} alt='logo'/>
        </div>
        <nav className='header__nav'>
          <a className='header__link' href=''>главная</a>
          <a className='header__link' href=''>туры</a>
          <a className='header__link' href=''>о компании</a>
          <a className='header__link' href=''>приемущества</a>
          <a className='header__link' href=''>галерея</a>
          <a className='header__link' href=''>faq</a>
          <a className='header__link' href=''>контакты</a>
        </nav>
        <div className='header__number'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="#141413"/>
          </svg>
          <p>8 (4112) 42-43-24</p>
          <button className="header__come btn">
            <i className="icon-excel"></i>вход
          </button>
        </div>
      </div>
    );
  }
  
  export default Header;