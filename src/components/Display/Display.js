import React, { useEffect, useState } from 'react';
import Programmers from '../Programmers/Programmers';

const Display = () => {
    const [programmers, setProgrammers] = useState([]);
    useEffect(() => {
        fetch('./programmer.JSON')
            .then(res => res.json())
            .then(data => setProgrammers(data))
    }, []);
    // console.log(programmers)
    return (
        <div className="row mt-5">
            <div className="col-9">
                <Programmers programmers={programmers}></Programmers>
            </div>
            <div className="col-3">
                <h1>ok</h1>
            </div>
        </div>
    );
};

export default Display;