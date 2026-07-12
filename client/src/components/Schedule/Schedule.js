import React from 'react';
import Title from '../Title/Title';
import './Schedule.css';

const sessions = [
    { time: '8:00 PM', activity: 'Welcome & weekly check-ins' },
    { time: '8:10 PM', activity: 'Opening prayer & worship' },
    { time: '8:20 PM', activity: 'Bible game' },
    { time: '8:35 PM', activity: 'Discussion / guest speaker' },
    { time: '8:55 PM', activity: 'Prayer requests & intercession' },
    { time: '9:00 PM', activity: 'Closing & announcements' },
];

function Schedule() {
    return (
        <section className='schedule'>
            <div className='schedule-inner section-inner'>
                <Title
                    eyebrow='Our weekly rhythm'
                    title='Schedule of a Connect'
                    light
                />
                <div className='schedule-table-wrap'>
                    <table className='schedule-table'>
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>Tuesday &mdash; Google Meet, 8&ndash;9pm</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sessions.map((s) => (
                                <tr key={s.time}>
                                    <td className='schedule-time'>{s.time}</td>
                                    <td>{s.activity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default Schedule
