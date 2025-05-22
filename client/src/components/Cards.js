import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Card() {
    return (
        <div className='cards'>
            <h1>Weekly Meetings</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src='../../public/images/img-3.jpg' text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery' path='/services'/>
                        <CardItem src='../../public/images/img-4.jpg'text='Experience Football on Top of the Himilayan Mountains'
                            label='Adventure' path='/products'/>
                        <CardItem src='../../public/images/img-8.jpg' text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'path='/sign-up'/>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Card
