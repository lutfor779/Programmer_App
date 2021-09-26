import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


import './Programmer.css'

const Programmer = (props) => {
    const { handleCart, programmer } = props;
    const { name, rol, age, experience, country, rate, image } = programmer;
    // console.log(id, name, rol, age, experience, country,rate, image)
    
    
    return (
            <div className="col">
            <div className="card shadow p-3 mb-5 bg-body">
                <img src={image} className="card-img-top rounded-circle" alt="..." />
                    <div className ="card-body px-4 py-3">
                        <h4 className="card-title text-primary">Name: {name}</h4>
                        <p className="card-text">Rol: {rol}</p>
                        <p>Age: {age}</p>
                        <p>Experience: {experience}</p>
                        <p>Country: {country}</p>
                        <p>Rate: {rate}</p>
                    <div className="button">
                        <button type="button"
                            className="btn btn-danger px-4 my-3"
                            onClick={()=>handleCart(programmer)}>
                            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
                    </div>
                    </div>
                </div>
            </div>
    );
};

export default Programmer;