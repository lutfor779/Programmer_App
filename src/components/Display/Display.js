import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Programmers from '../Programmers/Programmers';

const Display = () => {
    const [programmers, setProgrammers] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./programmer.JSON')
            .then(res => res.json())
            .then(data => setProgrammers(data))
    }, []);
    const handleCart = (props) => {
        const newCart = [...cart, props];
        setCart(newCart);
    }
    // console.log(cart);
    // console.log(programmers)
   
    return (
        <div className="bg-success bg-gradient bg-opacity-10">
            <div className="row mx-5 pt-5">
                <div className="col-9">
                    <Programmers
                        programmers={programmers}
                        handleCart={handleCart}></Programmers>
                </div>
                <div className="col-3">
                    <Cart selectProgrammer={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Display;