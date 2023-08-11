import './ThreeBlock.css';

function ThreeBlock() {
    return (
      <div id='three' className="threeBlock">
        <h2 className='threeBlock__title'>С нами комфортно</h2>
        <p className='threeBlock__text'>Основной принцип работы нашей фирмы — индивидуальный подход к каждому клиенту.</p>
        <div className='threeBlock__blocks'>
          <div className='threeBlock__block'>
            <h3><b>10</b><br />лет в отрасли</h3>
            <p>Мы заботимся о своей репутации и о каждом нашем клиенте. Верность, уверенность, дружба.</p>
          </div>
          <div className='threeBlock__block center'>
            <h3><b>786</b><br />туров</h3>
            <p>Постоянно обновляем пакеты услуг и подбираем только лучшие направления в туризме.</p>
          </div>
          <div className='threeBlock__block'>
            <h3><b>100%</b><br />безопасности</h3>
            <p>Наши пароходы всегда в отличном техническом состоянии и готовы к путешествиям</p>
          </div>
        </div>
        <button className='threeBlock__btn'>подробнее</button>
      </div>
    );
  }
  
  export default ThreeBlock;