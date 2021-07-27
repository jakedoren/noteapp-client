import React from 'react';
import './CardLayout.css';
import Card from './Cards'
import dizzyBoy from '../assets/dizzy-boy-head-7.png';
import dizzyGirl from '../assets/dizzy-girl-head-5.png';
import dizzyGirlBody from '../assets/dizzy-girl-body-7.png';

const CardLayout = () => {
    return (
        <div className="cards-section">
            <div className="card-heading">
                <h1>What's possible with Keeper?</h1>
                <hr></hr>
                <p>Keeper is a web application made for keeping your thoughts in check. You store all your thoughts, notes, todos on your dashboard for later viewing. We want you to never lose a thought.</p>
            </div>
            <div className="cards-wrapper">
                <Card img={dizzyBoy} imageAlt="Dizzy Boy" desc="This is Dizzy boy, he is an absolute legend. Simple UI, create, read, and delete your notes whenever you deem fit" />
                <Card img={dizzyGirlBody} imageAlt="Dizzy Boy" desc="Don't lsoe your head, jot it down with Keeper. Keeper makes it easy to keep your thoughts where they belong, still in your head" />
                <Card img={dizzyGirl} imageAlt="Dizzy Boy" desc="Live a busy lifestyle, utilize keeper anytime to track your thoughts. Thought tracking made easy!" />
            </div>
            <div className="bottom-block">
                <h1>Built for Thinkers.</h1>
            </div>
        </div>
    )
};

export default CardLayout;
