import React from 'react';
import './SelecedWorker.css';
const SelectedWorker = (props) => {
    // Destructuring data 
    const {name, img} = props.singleWorker
    return (
        <div className="worker-list">
            <img className="selected-worker-img" src={img} alt="" />
            <h2>{name}</h2>
        </div>
    );
};

export default SelectedWorker;