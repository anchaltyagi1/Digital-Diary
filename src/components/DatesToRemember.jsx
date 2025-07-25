import React, { useState } from 'react';
import '../styles/DatesToRemember.css';

function DatesToRemember() {
    const [dates, setDates] = useState([
        { id: 1, event: 'Mom\'s Birthday', date: '2025-08-12' },
        { id: 2, event: 'Project Submission', date: '2025-09-20' }
    ]);


    /* Managing form inputs-->These are two separate pieces of information: 
     event: like "Friend’s Anniversary"
     date: like "2025-10-05" , 
     We keep these values in state because the user will type them into the form. */

    const [event, setEvent] = useState('');
    const [date, setDate] = useState('');


    const handleAddDate = (e) => {
        e.preventDefault(); // This stops the page from refreshing when the form is submitted.
        if (event && date) {
            const newDate = {
                id: Date.now(), //unique id based on the currect time
                event,         //event from input
                date           //date from input
            };

            setDates([...dates, newDate]);

// After adding the new date, we clear the input fields so the user can type a new one.
            setEvent('');
            setDate('');
        }
    };

//  When you click delete, this function is called.It filters out (removes) the item that matches the id from the list.setDates(...) updates the list without the deleted item.   
    const handleDelete = (id) => {
        setDates(dates.filter(item => item.id !== id));
    };

    return (
        <div className="dates-container">
            <h2>📅 Dates to Remember</h2>
            <ul className="dates-list">
                {dates.map((item) => (
                    <li key={item.id}>
                        <span>{item.event} - {new Date(item.date).toLocaleDateString()}</span>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>

            <form className="add-date-form" onSubmit={handleAddDate}>
                <input
                    type="text"
                    placeholder="Event name"
                    value={event}
                    onChange={(e) => setEvent(e.target.value)}
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default DatesToRemember;
