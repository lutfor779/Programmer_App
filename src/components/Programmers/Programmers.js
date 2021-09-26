import React from 'react';
import Programmer from '../Programmer/Programmer';
import './Programmers.css';

const Programmers = (props) => {
    const { programmers, handleCart } = props;
    // console.log(handleCart);
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {
                    programmers.length > 0 ? programmers.map(programmer => <Programmer
                        programmer={programmer}
                        key={programmer.id}
                        handleCart={handleCart}></Programmer>) : 0
                }
            </div>            
        </div>
    );
};

export default Programmers;
<div >

</div>