// import React, { useState, useEffect } from 'react';
import * as React from 'react';
import useSettings from '../../hooks/useSettings';

export default function DarkLightSetting() {
    const { onChangeMode } = useSettings();
    const [time, setTime] = useState(0);

    useEffect(() => {
        changeTheme()
    }, [time]) // eslint-disable-line react-hooks/exhaustive-deps

    const getTime = () => {
        const d = new Date();
        const hour = d.getHours();
        setTime(hour)
    }

    const changeTheme = () => {
        const event = { target: { value: '' } };
        if (time < 18) {
            event.target.value = 'light'
        }
        else {
            event.target.value = 'dark'
        }
        onChangeMode(event)
    }

    setInterval(getTime, 3600000)

    return (
        <>
        {time}
        </>
    );
}
