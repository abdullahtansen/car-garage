import React from 'react';
import './Expert.css';
const Expert = ({expert}) => {
    const {name, img, expertize} = expert;
    return (
        <div className="col-12 col-lg-4">
           <img className="img-slide" src={img} alt="" />
            <h3>{name}</h3>
            <h5 className='text-danger'>{expertize}</h5>
         </div>
    );
};

export default Expert;