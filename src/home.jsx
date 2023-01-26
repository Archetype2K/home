import React from "react";
import Header from "./components/Header";
import votingImg from './assets/Voting.svg';
import Service from './components/Service';
import Card from './components/Card';

function Home() {
    return (
        <div className="bg-black">
            <Header />
            <div>
                <img className="w-1/2 m-auto" src={votingImg} alt="voting for All" />
            </div>

            <div className='text-white font-sans hover:font-serif text-center antialiased text-2xl'>
                <h1>Voting Done Simple</h1>
                <h3>Transparent - Reliable - Anonymous</h3>
            </div>
            <Card />
        </div>
    )
}

export default Home;