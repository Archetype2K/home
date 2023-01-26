import { useState } from 'react';
import '../home.css'

function Service(props) {
    const [Tag, setTag] = useState(props.Tag);
    const [Destination, setDestination] = useState(props.Destination);
    
    return (
        <></>
    )

    function handleClick(){
        window.location.href = Destination;
    }
}

export default Service;