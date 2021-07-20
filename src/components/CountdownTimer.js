import React, {useState, useEffect} from 'react'
import { of, interval, concat, Subject } from "rxjs";
import { takeWhile, takeUntil, scan, startWith, repeatWhen, share } from "rxjs/operators";


const Countdown$= interval(1000).pipe(
    startWith(10),
    scan((time)=> time-1),
    takeWhile(time => time>0)
); 

const observables$ = concat(Countdown$ , of("TimeUp"));

function CountdownTimer() {

    const [state, setState] = useState();

    useEffect(() => {
       const subscribe =  observables$.subscribe(setState)
        return() => subscribe.unsubscribe();
    },[])

    return (
        <div className="countdownTimer">
            <h1>Countdown Timer</h1>
            <div id= "timer">{state} </div>
        </div>
    )
}

export default CountdownTimer
