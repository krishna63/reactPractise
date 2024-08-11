import React from 'react'
import { PersistInput, PersistInputWithTransition, PersistInputWithUseActionState } from './PersistInput/PersistInput';
import { ShowOptimisticValueInsteadOfPendingStates } from './OptimisticDataWhileActionIsCompleted';

export function App() {
    const inlineBlock = { 'display': 'iniline-block' }
    return (
        <>
            <h1>UseTransition</h1>
            <PersistInput />
            <PersistInputWithTransition />
            <br />
            <h2>Client API: In React 19 functions that trigger transitions are called Actions</h2>
            <h4 style={inlineBlock}>useActionState:</h4> <span>A hook which update state based on the result of the action.
                In the previous example we were setting the data using the state variable depending on the pending state but with use we can avoid
                it.
            </span>
            <PersistInputWithUseActionState />
            <h2>usOptimistic - hook</h2>
            <p>
                An asynchronous can take longer time to complete than expected or may be user is on
                slower internet connection, <u>so instead of showing pending state we can show the data as
                    if the action is completed.</u> Here we are showing the optimistic value till the
                server respond. <em>Once the action is completed then we can show user the actual value.</em>
            </p>
            <ShowOptimisticValueInsteadOfPendingStates />
        </>
    )
}