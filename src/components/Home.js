import React, {useEffect, useState} from 'react';
import { Timer } from 'easytimer.js';
import {TimeDisplay} from './TimeDisplay';
const timer = new Timer();

const onClickHandler = () => {
    if (timer.isRunning()) {
        timer.stop();
    } else {
        timer.start({
            startValues: {
                minutes: 25,
                seconds: 0
            },
            target: [0,0,0,0,0],
            countdown: true,
        });   
    }
}

export function Home() {
    let [currentTime, setCurrentTime] = useState('N/A');

    timer.addEventListener('started', () => {
        console.log('timer started!');
    })
    
    timer.addEventListener('stopped', () => {
        console.log('timer ended');
        setCurrentTime('N/A');
    })

    timer.addEventListener('secondsUpdated', () => {
        console.log(timer.getTimeValues());
        const timerValues = timer.getTimeValues();
        const minutes = timerValues['minutes'];
        const seconds = timerValues['seconds'];
        setCurrentTime(`${minutes}:${seconds}`);
    })

    return (
        <>
            <h1>This is the home page!</h1>
            <button onClick={onClickHandler}>Test!</button>
            <TimeDisplay currentTime={currentTime}/>
        </>
    )
}