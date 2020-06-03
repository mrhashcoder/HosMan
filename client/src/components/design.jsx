import React from 'react';
import './design.css';
import big from './img/big-eclipse.svg';
import mid from './img/mid-eclipse.svg';
import sm from './img/small-eclipse.svg';

const Design = props => (
    <div>
        <img className="big-circle" src={big} alt="" />
		<img className="medium-circle" src={mid} alt="" />
		<img className="small-circle" src={sm} alt="" />
    </div>
);

export default Design;