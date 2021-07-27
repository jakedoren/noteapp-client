import React from 'react';
import './CardLayout.css';
import Card from './Cards'
import dizzyBoy from '../assets/dizzy-boy-head-7.png';
import dizzyGirl from '../assets/dizzy-girl-head-5.png'

const CardLayout = () => {
    return (
        <div className="cards-section">
            <div className="cards-wrapper">
                <Card img={dizzyBoy} imageAlt="Dizzy Boy" desc="This is Dizzy boy, he is an absolute legend." />
                <Card img={dizzyBoy} imageAlt="Dizzy Boy" desc="This is Dizzy boy, he is an absolute legend." />
                <Card img={dizzyGirl} imageAlt="Dizzy Boy" desc="This is Dizzy boy, he is an absolute legend." />
            </div>
        </div>
    )
};

export default CardLayout;
