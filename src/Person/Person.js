import React from 'react';
import './Person.css';

const Person = (props) => { /* Am passing one parameter called props as an arugment */
    // props.name will render our names and props.age gives their age respectively 
    // These are my reused components outside automatically
    // return <p>I'm {props.name} and my age is {props.age} years old</p>;
    /* Can wrap the above return into div */
    return (
        <div className="Person">
        <p onClick={props.click}>I'm {props.name} and my age is {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} />
    </div>
    )
};

export default Person;