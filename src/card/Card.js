import './Card.css';

function Card(props) {
    return <div className="card">
        <div className='card__img'>
            <img src={props.img} />
        </div>
        <div className="card__description">
            <div className="card__blue"><b>{props.bold1}</b><br/>{props.day}</div>
            <div className="card__blue"><b>{props.bold2}</b><br/>Человека</div>
            <div className="card__white">{props.price}</div>
        </div>
        <h3 className="card__title">{props.title}</h3>
        <p className="card__text">{props.text}</p>
        <a className='card__link' href="">Начать путешествие</a>
    </div>
  }

  export default Card;