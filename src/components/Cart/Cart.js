import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { selectProgrammer } = props;

    const total = selectProgrammer.reduce((previous, current) => previous + current.rate, 0);
    
    console.log(total);

    return (
        <div className="cart card shadow p-3 bg-body sticky-top">
            <h1 className="text-center text-info">Heired: {selectProgrammer.length}</h1>
            <h3 className="text-center mt-3 text-danger">Total Cost: {total}</h3>
            <br />
            <br />
            <ol>
                
                {
                    selectProgrammer.map(SelectedProgrammer => <li key={SelectedProgrammer.id} className="ps-5"><h5>{SelectedProgrammer.name}</h5></li>)
                }
            </ol>
        </div>
    );
};

export default Cart;