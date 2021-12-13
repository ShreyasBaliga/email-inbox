import { Email, EmailBody } from 'interface/email';
import { RootState } from 'interface/root';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmailBody } from 'store/actions/sample';
import styles from './emailBody.module.css';

const EmailBod = (props:{ id: string }) => {
    const { id } = props;
 
    const dispatch = useDispatch();
    const { body } = useSelector((state: RootState) => state.sample)

    useEffect(() => {
        dispatch(getEmailBody(id))
    }, [])

    return (<div className={styles['card']}>
    <div className={styles['persona']}>
        P
    </div>
    <div className={styles['content']}>
        <div className={styles['first-line']}>
            <p>Lorem Ipsum</p>
            <div className={styles['fav-button']}>Mark as Fav</div>
        </div>
        <div>Date</div>
        {body}
    </div>
  </div>); 
}

export default EmailBod;
