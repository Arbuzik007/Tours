import React, {useState, useEffect, useRef} from 'react'
import "./Accordion.css"
import Chevron from '../img/chevron.svg'

export default function Accordion(props) {

    const [toggle, setToggle] = useState(false)
    const [heightEl, setHeightEl] = useState();

    const refHeight = useRef()

    useEffect(() => {
        console.log(refHeight);
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, [])

    const toggleState = () => {
        setToggle(!toggle)
    }

    return (
        <>
            <button 
            onClick={toggleState}
            className="accordion-visible">
                <div className='number'>{props.number}</div>
                <span>{props.title}</span>
                <img 
                className={toggle && "active"}
                src={Chevron} />
            </button>
        <div className="accordion">

            
            
            <div 
            className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
            style={{height: toggle ? `${heightEl}` : "0px"}}
            ref={refHeight}
            >
                <p aria-hidden={toggle}>{props.text}</p>
            </div>
            
        </div>
        </>
    )
}