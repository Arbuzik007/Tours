import './OneBlock.css';
import rock from "../img/bg1.png"
import girl from "../img/girl.png"
import title from "../img/title.png"
import Header from '../header/Header';

function OneBlock() {
    return (
      <div id='one' className="oneBlock">
        <Header />
        <div className='oneBlock__rock'>
          <img src={rock} alt='rock'/>
        </div>
        <div className='oneBlock__title'>
          <img src={title} alt='title'/>
        </div>
        <div className='oneBlock__girl'>
          <img src={girl} alt='girl'/>
        </div>
        <button className='oneBlock__big-btn btn'>Записаться на тур</button>
        <div className='oneBlock__flex'>
          <button className="btn">подробнее</button>
          <div className='oneBlock__black-div'>
            <p>Откройте для себя Якутию с ведущим туроператором Yktours. Основной принцип работы 
               нашей фирмы — индивидуальный подход к каждому клиенту.</p>
          </div>
        </div>
        
      </div>
    );
  }
  
  export default OneBlock;