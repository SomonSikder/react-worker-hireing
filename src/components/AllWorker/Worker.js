import React, { useEffect, useState } from 'react';
import SingleWorker from '../SingleWorker/SingleWorker';
import TotalCosting from '../TotalCosting/TotalCosting';
import './Worker.css';


const Worker = () => {
    const [workers, setWorker] = useState([])

    useEffect(()=>{
        fetch('./worker.JSON')
            .then(res => res.json())
            .then(data => setWorker(data))
    },[])
    return (
        <div className="card-container">
            <div className='single-card'>
                {
                    workers.map(worker => <SingleWorker worker={worker}></SingleWorker>)
                }
            </div>
            <TotalCosting></TotalCosting>
        </div> 
    );
};

export default Worker;