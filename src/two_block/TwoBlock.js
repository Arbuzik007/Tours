import './TwoBlock.css';
import bg from "../img/bg2.jpg"

function TwoBlock() {
    return (
      <div className="twoBlock">
        <div className='oneBlock__bg'>
          <img src={bg} alt='bg'/>
        </div>
      </div>
    );
  }
  
  export default TwoBlock;