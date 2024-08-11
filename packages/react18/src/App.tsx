import React, {useEffect, useState} from 'react'
import { AppWithoutTransition } from './components/AppWithoutTransition'
import {AppWithTransition} from './components/AppWithTransition';
import { PersistInput } from './PersistInput/PersistInput';

export function App() {
    return (
        <>
            <AppWithoutTransition />
            <AppWithTransition />
            <PersistInput />
        </>
    )
}