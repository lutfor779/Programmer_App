import React from 'react';

const Cart = (props) => {
    const { selectProgrammer } = props;

    const total = selectProgrammer.reduce((previous, current) => previous + current.rate, 0);
    
    console.log(total);

    return (
        <div>
            <h1>Ordered: {selectProgrammer.length}</h1>
            <p>Total: {total}</p>
            <ul>
                {
                    selectProgrammer.map(Selectedprogrammer => <li key={Selectedprogrammer.id}>{Selectedprogrammer.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;