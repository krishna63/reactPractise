import React, { useEffect, useRef } from 'react'

const ChildComponent = React.forwardRef<HTMLInputElement>((props: any, inputElementRef) => {
    const { ipValue } = props;
    return (
        <>
            <label htmlFor="forwardRefInpute">Session is on: </label>
            <input type='text' name="forwardRefInput"
                id="forwardRefInput"
                ref={inputElementRef}
                value={ipValue}
            ></input>
        </>
    )
})

export function App() {
    const inputElementRef = useRef<HTMLInputElement>();
    useEffect(() => {
        console.log(inputElementRef.current)
    })
    return (
        <>
            <h2> Forward ref is used to access the child element from the parent</h2>
            {/* <ChildComponent ipValue={'test'}
                ref={inputElementRef}
            /> */}
        </>
    )
}