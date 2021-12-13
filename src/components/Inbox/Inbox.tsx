import { Email } from 'interface/email';
import React, { useEffect, useState } from 'react';
import styles from './inbox.module.css';
import Card from 'components/Card/Card';
import EmailBod from 'components/EmailBody/EmailBody';
import { useDispatch, useSelector } from 'react-redux';
import { getEmails } from 'store/actions/sample';
import { RootState } from 'interface/root';

const Inbox = () => {

    const [ filterBy, setFilterBy ] = useState<string>('read')
    const [ selectedId, setSelectedId ] = useState<string>();

    const dispatch = useDispatch();
    const { emails } = useSelector((state: RootState) => state.sample)

    useEffect(() => {
        dispatch(getEmails())
    }, [])

    return (<div className={styles['main-container']}>
    <div className={styles['filter-container']}>
        Filter By:
        <div className={styles['filter']} style = {filterBy === 'read' ? { background: 'grey' } : undefined} onClick={() => setFilterBy('read')}>Read</div>
        <div className={styles['filter']} style = {filterBy === 'unread' ? { background: 'grey' } : undefined} onClick={() => setFilterBy('unread')}>Unread</div>
        <div className={styles['filter']} style = {filterBy === 'fav' ? { background: 'grey' } : undefined} onClick={() => setFilterBy('fav')}>Fav</div>
    </div>
    <div className={styles['email-container']}>
        <div className={styles['email-list-container']} style={{
            width: selectedId ? '42%' : '100%'
        }}>
            {emails.map((email) => {
                const emailParsed: Email = JSON.parse(JSON.stringify(email));
                return <div onClick={() => setSelectedId(emailParsed.id)}><Card id = {emailParsed.id} from = {emailParsed.from} date={new Date(emailParsed.date)}
                    short_description= {emailParsed.short_description} subject={emailParsed.subject}
                    /></div>
            })}
        </div>
        { selectedId &&  <div style={{ width: '55%' }}>
            <EmailBod  id ={selectedId} />
        </div>}
    </div>
  </div>); 
}

export default Inbox;