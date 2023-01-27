import React from "react";
import Header from "./components/Header";
import votingImg from './assets/Voting.svg';
import Card from './components/Card';
import Archi from './assets/archi.png';
import Break from './components/Break';
import Election from './assets/election_watcher.png';
import Qfree from './assets/qfree.png';

function Home() {
    return (
        <div className="bg-black">
            <Header />

            <div>
                <img className="w-1/2 m-auto" src={votingImg} alt="voting for All" />
            </div>

            <div className='text-white font-sans hover:font-serif text-center antialiased text-2xl'>
                <h1>Voting Done Simple</h1>
                <h3>Transparent - Reliable - Anonymous - Accessible</h3>
            </div>

            <Card />

            <br></br>
            <div className='text-white font-sans hover:font-serif text-center antialiased text-2xl'>
                <h1>Architecture</h1>
                <br></br>
            </div>

            <div>
                <img className="w-1/2 m-auto" src={Archi} alt="voting for All" />
            </div>

            <br></br>
            <div className='text-white font-sans hover:font-serif text-center antialiased text-2xl'>
                <h1>Productization</h1>
                <br></br>
            </div>
            
            <br></br>
            <div className='text-white font-sans hover:font-serif text-center antialiased text-2xl'>
                <h2>Scalable from small companies to Governments</h2>
                <h2>Subscription based sales</h2>
                <h2>Open Source some of the core features to gain trust </h2>
                <br></br>
            </div>

            <Break />

            <br></br>
            <div className='text-white font-sans hover:font-serif text-center antialiased text-2xl'>
                <h1>Future Enhancement</h1>
                <br></br>
            </div>

            <br></br>
            <div className="flex flex-row">
                <img className="w-1/4 m-auto" src={Election} alt="voting for All" />
                <img className="w-1/4 m-auto" src={Qfree} alt="voting for All" />
            </div>

            <br></br>
            <div className="flex flex-row">
                <img className="w-1/4 m-auto" src={Election} alt="voting for All" />
                <img className="w-1/4 m-auto" src={Qfree} alt="voting for All" />
            </div>

            


        </div>
    )
}

export default Home;