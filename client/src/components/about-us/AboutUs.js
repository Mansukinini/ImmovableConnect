import React from 'react';
import { Element } from 'react-scroll';
import './AboutUs.css';

function AboutUs() {
    const cardsData = [
        {
            id: 1,
            title: 'Accountability & Growth',
            text: 'We require suitable reflection of the content delivered in the cell group and engagement of the rest of cell concerning spiritual growth. This comprises coming up with homeworks, arranging rosters for weekly encouragement from leaders and keeping the WhatsApp group active.',
            icon: 'fas fa-seedling'
        }, {
            id: 2,
            title: 'Treasury',
            text: 'We require the Cell to have a mini account where we make monthly contributions as Leaders and anyone who wants to help the Cell financially can as well. This will be used for any Cell activities, helping the poor or any member in the Cell should they require the funds.',
            icon: 'fas fa-hand-holding-heart'
        }, {
            id: 3,
            title: 'Follow Up',
            text: 'We require every member of our Cell Group to be checked up upon especially when they do not pitch up for our sessions. This includes messaging them and giving us feedback.',
            icon: 'fas fa-user-friends'
        }, {
            id: 4,
            title: 'Intercession',
            text: 'We require fervent prayer sessions during the cell group time and among leaders. This includes praying upon prayer requests and following up on the progress of those prayer requests.',
            icon: 'fas fa-praying-hands'
        }, {
            id: 5,
            title: 'Events & Program',
            text: 'We require events of the cell group to be consolidated from planning by leaders, and the program to be drawn and understood. This includes keeping the cell group notified about what is to come, inviting speakers and execution of activities.',
            icon: 'fas fa-calendar-check'
        }, {
            id: 6,
            title: 'Social Media & Marketing',
            text: 'Responsible for managing the public image and communication of Immovables Connect: promoting events and programs, communicating the vision and activities of the ministry, documenting highlights and testimonies, and supporting outreach and growth through digital platforms.',
            icon: 'fas fa-bullhorn'
        }, {
            id: 7,
            title: 'Secretarial',
            text: 'Here we require all the meetings to be minuted and sent to us or the cell group via a word document. This is to keep a record of activities taking place.',
            icon: 'fas fa-pen-nib'
        }
    ];

    return (
        <Element name="about-us" id='about-us'>
            <div className='about-us-container'>
                {cardsData.map((card) => (
                    <div key={card.id} className="card">
                        <span className="card-icon">
                            <i className={card.icon} />
                        </span>
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">{card.text}</p>
                    </div>
                ))}
            </div>
        </Element>
    );
}

export default AboutUs
