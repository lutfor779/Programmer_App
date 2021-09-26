import React from 'react';
import Programmer from '../Programmer/Programmer';
import './Programmers.css';

const Programmers = (props) => {
    const { programmers } = props;
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-5">
                {
                    programmers.length > 0 ? programmers.map(programmer => <Programmer programmer={programmer} key={programmer.id}></Programmer>) : 0
                }
            </div>


        </div>
    );
};

export default Programmers;
<div >

</div>