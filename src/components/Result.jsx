import { useEffect, useState } from 'react';
import axios from 'axios';

export default function() {
    const [ data, setData ] = useState([])
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(resdata => setData(resData))
        return () => {
          console.log("unmounting")
        };
      }, [0]);
    
      return data
}