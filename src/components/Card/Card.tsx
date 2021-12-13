import { Email } from 'interface/email';
import React from 'react';
import styles from './card.module.css';

const Card = (props: Email) => {
    const {id,  from, subject, short_description, date } = props;
    return (<div key = {id} className={styles['card']}>
    <div className={styles['persona']}>
        {from.name ? from.name.charAt(0).toUpperCase() : ''}
    </div>
    <div className={styles['content']}>
        <div>
            <p><span>From: </span>{from.name} {`<${from.email}>`}</p>
            <p><span>Subject: </span>{subject}</p>
        </div>
        <div>{short_description}</div>
        <div>{date.toString()}</div>
    </div>
  </div>); 
}

export default Card;