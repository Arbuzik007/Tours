import './TwoBlock.css';
import Card from '../card/Card';
import bg1 from "../img/Rectangle 36.jpg"
import bg2 from "../img/Rectangle 37.jpg"
import bg3 from '../img/Rectangle 38.jpg';

function TwoBlock() {
    return (
      <div id='two' className="twoBlock">
        <div className='twoBlock__header'>
          <h2>Наши туры</h2>
          <button className='twoBlock__btn btn'>все туры</button>
        </div>
        <p className='twoBlock__description'>Организация банкетов на теплоходе в Якутии приобретает все большую популярность.
           Это прекрасная возможность насладиться отменной кухней, высококлассным обслуживанием и великолепными.</p>
        <div className='twoBlock__cards'>
          <Card bold1='3' bold2='2' day='Дня' price='42 445P' title='Банкет на теплоходе' img={bg1}
                text='Организация банкетов на теплоходе в Якутии приобретает все большую популярность. 
                Это прекрасная возможность насладиться отменной кухней, высококлассным обслуживанием и великолепными видами.'/>
          <Card bold1='5' bold2='4' day='Дней' price='14 688P' title='Круиз "Усть-Кут-Якутск"' img={bg2}
                text='Приглашаем Вас отправится в круиз по Якутии - самый большой и самый холодный регион России. 
                Это одно из тех редких мест на планете, где сохранилась первоначальная чистота природы, удивительное разнообразие флоры и фауны.'/>
          <Card bold1='3' bold2='2' day='Дня' price='42 445P' title='Рыболовный круиз "Love is Рыбка"' img={bg3}
                text='Круиз «Love is рыбка» проводится ежегодно в начале сентября. Оба теплохода «Михаил Светлов» 
                и «Демьян Бедный» отправляются в круиз до местности о. Тайменный.'/>
        </div>
      </div>
    );
  }
  
  export default TwoBlock;