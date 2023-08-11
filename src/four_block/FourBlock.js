import './FourBlock.css';
import Accordion from "../accordion/Accordion";

function FourBlock() {

    return (
      <div id='four' className="fourBlock">
        <h2 className='fourBlock__title'>Ответы на вопросы:</h2>
        <Accordion number='1' title='Маршрут и продолжительность круиза?' text='Паспорт, снилс и медицинский полис (на случай обращения к медработнику на борту теплохода)' />
        <Accordion number='2' title='Что привезти?' text='Паспорт, снилс и медицинский полис (на случай обращения к медработнику на борту теплохода)' />
        <Accordion number='3' title='Что взять с собой в круиз?' text='Паспорт, снилс и медицинский полис (на случай обращения к медработнику на борту теплохода)' />
      </div>
    );
  };
  
  export default FourBlock;