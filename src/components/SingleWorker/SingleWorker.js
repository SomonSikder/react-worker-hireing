import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SingleWorker.css';

const SingleWorker = (props) => {
    console.log(props);
    const {name, age, phone, gender, payment, img} = props.worker
    const pluseIcon = <FontAwesomeIcon icon={faPlusCircle} />
    return (
        <div className='card'>
            <img className='worker-img' src={img} alt="" />
            <div className="worker-info">
                <h4 className='name'>Name: {name}</h4>
                <p>Age: {age}</p>
                <p>Phone: {phone}</p>
                <p>Gender: {gender}</p>
                <p>Cost To Hire: {payment}</p>
            </div>
            <button 
                className='hire-btn'
            >{pluseIcon} Hire Me </button>
                     
           
        </div>
    );
};

export default SingleWorker;