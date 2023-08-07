import './FourBlock.css';
import Accordion from '../accordion/Accordion';

function FourBlock() {
    return (
      <div className="FourBlock">
        <h2></h2>
        <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
      </div>
    );
  }
  
  export default FourBlock;