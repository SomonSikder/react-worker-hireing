import React from 'react';
import SelectedWorker from './SelectedWorker';
import './TotalCosting.css';



const TotalCosting = (props) => {
    const selectedWorker = props.worker
    
    // Total costing find out part
    let totalCost = 0
    for(const worker of selectedWorker){
        totalCost += worker.payment
    }
    return (
        <div className='total-costing-card'>
            <h2 className='total-worker'>Total Worker : {selectedWorker.length}</h2>
            <p>Your Cost Will be : <span className='total-cost'>{totalCost}</span></p>
            <h3 className='worker-name'>Hired Worker:</h3>
            {selectedWorker.map(worker=><SelectedWorker key={worker.id} singleWorker={worker}></SelectedWorker>)}
        </div>
    );
};

export default TotalCosting;

