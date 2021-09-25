import React, { useEffect, useState } from 'react';
import SingleWorker from '../SingleWorker/SingleWorker';
import TotalCosting from '../TotalCosting/TotalCosting';
import './Worker.css';


const Worker = () => {
    // state declaration
    const [workers, setWorker] = useState([])
    const [seleckedWorker, setseleckedWorker] = useState([])
    
    // Data loading function
    useEffect(()=>{
        fetch('./worker.JSON')
            .then(res => res.json())
            .then(data => setWorker(data))
    },[])

    // Selected Worker function Handling
    const addHandeler = worker =>{
        const newSelectedWorker = [...seleckedWorker, worker]
        setseleckedWorker(newSelectedWorker)
    }

    return (
        <div className="card-container">
            <div className='single-card'>
                {
                    workers.map(worker => <SingleWorker
                        key={worker.id} 
                        worker={worker}
                        addHandeler={addHandeler}
                    ></SingleWorker>)
                }
            </div>
            <TotalCosting worker={seleckedWorker} ></TotalCosting>
        </div> 
    );
};

export default Worker;