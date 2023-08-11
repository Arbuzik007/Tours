import './FiveBlock.css';

function FiveBlock() {
    return (
      <div  id='five' className="fiveBlock">
        <h2 className='fiveBlock__title'>Остались вопросы!</h2>
        <p className='fiveBlock__text'>Напишите нам!</p>
        <input className='one' type='text' placeholder='Имя' /><br/>
        <input className='two' type='tel' placeholder='Телефон' /><br/>
        <input className='three' type='text' placeholder='Ваше сообщение' />
      </div>
    );
  }
  
  export default FiveBlock;