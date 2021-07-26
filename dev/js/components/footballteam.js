import { useState } from 'react';
import React, {Component} from 'react';

function FootBallTeam ()  {

    const [counter, setCounter] = useState([0]);

    return ( <div> <div>{counter}</div>
                 <button onClick={() => setCounter(counter[1]++)}>counter</button>
           </div> )

}

export default FootBallTeam;
