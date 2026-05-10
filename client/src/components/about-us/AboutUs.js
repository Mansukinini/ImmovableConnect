import React from 'react';
import './AboutUs.css';

function AboutUs() {
    const cardsData = [
        {
            id: 1,
            title: 'ACCOUNTABILITY AND GROWTH',
            text: 'We require suitable reflection of the content delivered in the cell group and engagement of the rest of cell concerning spiritual growth. This comprises coming up with homeworks, arranging rosters for weekly encouragement from leaders and keeping the WhatsApp group active.',
            imgSrc: '../../../public/images/icon.png'
        },{
            id: 2,
            title: 'TREASURY',
            text: 'We require the Cell to have a mini account where we make monthly contributions as Leaders and anyone who wants to help the Cell financially can as well. This will be used for any Cell activities, helping the poor or any member in the Cell should they require the funds.',
            imgSrc: '../../../public/images/icon.png'
        },{
            id: 3,
            title: 'FOLLOW UP',
            text: 'We require every member of our Cell Group to be checked up upon especially when they do not pitch up for our sessions. This includes messaging them and giving us feedback',
            imgSrc: '../../../public/images/icon.png'
        },{
            id: 4,
            title: 'INTERCESSION',
            text: 'We require fervent prayer sessions during the cell group time and among leaders. This includes praying upon prayer requests and following up on the progress of those prayer requests.',
            imgSrc: '../../../public/images/icon.png'
        },{
            id: 5,
            title: 'EVENTS AND PROGRAM',
            text: 'We require events of the cell group to consolidated from planning by leaders, and program to be drawn and understood. This includes keeping the cell group notified about what to come, inviting speakers and execution of activities.',
            imgSrc: '../../../public/images/icon.png'
        },{
            id: 6,
            title: 'Social Media and Marketing',
            text: 'The Social Media and Marketing Department is responsible for managing the public image and communication of Immovables Connect. Its role is to promote events and programs, communicate the vision and activities of the ministry, document and share highlights and testimonies, and support engagement, outreach, and growth through digital platforms. The department works closely with Events and Program while operating as a standalone department.',
            imgSrc: '../../../public/images/icon.png'
        },{
            id: 7,
            title: 'SECRETARIAL',
            text: 'Here we require all the meetings to be minuted and sent to us or cell group via a word document. This is to have a record of activities taking place.',
            imgSrc: '../../../public/images/icon.png'
        }
    ];

    return (
        <div id='about-us'> 
            <div className='about-us-container'>
            {cardsData.map((card) => (
                <div key={card.id} className="card">
                    <div className="card-header">
                        <img src={card.imgSrc} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{card.title}</h5>
                            <p title={card.text} className="card-text">{card.text.length > 150 ? card.text.slice(0, 150) + '...' : card.text}</p>
                        </div>
                    </div>
                </div>                    
            ))}
        </div>
        </div>        
    );
}

export default AboutUs
