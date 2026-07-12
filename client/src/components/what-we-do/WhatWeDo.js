import React from 'react';
import { Element } from 'react-scroll';
import Title from '../Title/Title';
import './WhatWeDo.css'

const team = [
    { id: 1, src: '/public/images/evans.png', name: 'Evans' },
    { id: 2, src: '/public/images/murendeni.png', name: 'Murendeni' },
    { id: 3, src: '/public/images/kagiso.png', name: 'Kagiso' },
    { id: 4, src: '/public/images/natasha.png', name: 'Natasha' },
    { id: 5, src: '/public/images/katlego.png', name: 'Katlego' },
    { id: 6, src: '/public/images/tshwarelo.png', name: 'Tshwarelo' },
];

function WhatWeDo() {
    return (
        <Element name="what-we-do-container" className='what-we-do-container'>
            {/* Two-column intro block */}
            <div className='wwd-block section-inner'>
                <div className='wwd-image'>
                    <img src="/public/images/team.png" alt='The Immovables Connect community' />
                </div>
                <div className='wwd-copy'>
                    <Title
                        eyebrow='What we do'
                        title='Growing in faith, together'
                        align='left'
                    />
                    <p>
                        Immovables Connect is an online Connect / Cell community convening weekly
                        from 8&ndash;9pm via Google Meet. It is a community of young people and young
                        adults whose passion lies in fostering Christ&#8209;centered connections and
                        Christ&#8209;like maturity.
                    </p>
                    <p>
                        This is done through weekly check&#8209;up sessions on each other, fervent
                        prayers, Bible games and ground&#8209;breaking discussions on topics
                        concerning the youth and living a healthy Christian lifestyle &mdash; within
                        the community and through invitation of renowned and experienced guest speakers.
                    </p>
                </div>
            </div>

            {/* Full-bleed green mission block */}
            <div className='wwd-mission'>
                <div className='wwd-mission-inner section-inner'>
                    <h2>Welcoming God into our hearts</h2>
                    <p>
                        We exist to build a community where young believers stay rooted, encourage
                        one another, and mature in Christ &mdash; anchored in accountability, prayer
                        and genuine connection that reaches beyond a screen.
                    </p>
                </div>
            </div>

            {/* Team grid */}
            <div className='wwd-team section-inner'>
                <Title
                    eyebrow='Meet our leaders'
                    title='The team behind the Connect'
                />
                <div className='team-grid'>
                    {team.map((member) => (
                        <div key={member.id} className='team-card'>
                            <img
                                className='what-we-do-image'
                                src={member.src}
                                alt={member.name}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Element>
    );
}

export default WhatWeDo
