import { useState } from 'react';
import '../home.css'

function Service(props) {
    const [Tag, setTag] = useState(props.Tag);
    const [Destination, setDestination] = useState(props.Destination);
    
    return (
        <div className="serviceContainer" onClick={handleClick}>
            <h1>{Tag}</h1>
        </div>
    )

    function handleClick(){
        window.location.href = Destination;
    }
}

export default Service;