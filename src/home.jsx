import React from "react";
import Header from "./components/Header";
import votingImg from './assets/Voting.svg';
import Service from './components/Service';

function Home() {
    return (
        <div className="container">
            <Header />
            <div>
                <img className="imgContainer" src={votingImg} alt="voting for All" />
            </div>

            <div className='AppNameContainer'>
                <h1>Voting Done Simple</h1>
                <h3>Transparent - Reliable - Anonymous</h3>
            </div>
            <div className="serviceTagsContainer">
                <Service Tag="Voter Registration"  Destination=".././voterReg.html"/>
                <Service Tag="Party Registration"  Destination=".././PartyReg.html" />
                <Service Tag="Voting Platform"   Destination=".././VotingPortal.html"/>
                <Service Tag="Results" Destination=".././results.html"/>
            </div>
        </div>
    )
}

export default Home;