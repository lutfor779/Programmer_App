import React from 'react';
import './Programmer.css'

const Programmer = (props) => {
    const { name, rol, age, experience, country, rate, image } = props.programmer;
    // console.log(id, name, rol, age, experience, country,rate, image)
    return (
            <div className="col">
                <div className="card ">
                <img src={image} className="card-img-top rounded-circle" alt="..." />
                    <div className ="card-body px-5 py-3">
                        <h5 className="card-title">Name: {name}</h5>
                        <p className="card-text">Rol: {rol}</p>
                        <p>Age: {age}</p>
                        <p>Experience: {experience}</p>
                        <p>Country: {country}</p>
                        <p>Rate: {rate}</p>
                    </div>
                </div>
            </div>
    );
};

export default Programmer;