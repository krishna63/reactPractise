import React, {
    FormEvent, FormEventHandler, useActionState,
    useState,
    useOptimistic
} from "react"
const initMessageFromServer = [
    "First Message",
    "Second Message",
    "Third Message!!!"
]
const updateMessageList = (message: string) => {
    const url = '/updateMessageList';
    return fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ addNewMessage: message })
    })
}

export const ShowOptimisticValueInsteadOfPendingStates = () => {

    const [messages, setMessages] = useState<Array<string>>([...initMessageFromServer])

    const handleMessagesUpdate = (updatedMessages: Array<string>) => {
        setMessages([...updatedMessages])
    }

    return (
        <OptimisticDataWhileActionIsGoingOn messages={messages} afterMessageUpdate={handleMessagesUpdate} />
    )
}

interface optimisticProps {
    messages: Array<string>
    afterMessageUpdate: (messagesList: Array<string>) => void
}


export const OptimisticDataWhileActionIsGoingOn = ({ messages, afterMessageUpdate }: optimisticProps) => {
    const [messagesList, addOptimisticValueFnRef] = useOptimistic(messages, (currentState, optimisticValue) => {
        console.log("inside use optimistic hook update functions", optimisticValue)
        return [...currentState, optimisticValue]
    })
    const [baseFormState, formAction, isPending] = useActionState(async (currentFormValue, formData: FormData) => {
        console.log('use action state', currentFormValue)
        addOptimisticValueFnRef(`${formData.get("customMessage")} - isPending ${isPending}`)
        const resp = await updateMessageList(formData.get("customMessage") as string)
        const updatedMessageList = await resp.json();
        afterMessageUpdate(updatedMessageList)

    }, {})

    return (
        <>
            <ul>
                {messagesList.map((eachVal, valIndex) => {
                    return (<li key={valIndex}>{eachVal}</li>)
                })}
            </ul>
            <form action={formAction}>
                <input name="customMessage" autoComplete="off"></input>
                <button>Add Message</button>
            </form>
            <details style={{ paddingTop: '10px' }}>
                <summary>Points to Remember </summary>
                <ol>
                    <li>
                        useOptimistic takes in two arguments
                        <ul>
                            <li>Initial value of the property </li>
                            <li>
                                A function to execute when the action is in pending state.
                            </li>
                        </ul>
                    </li>
                    <li>Function returned from the <em>useOptimistic</em> hook can update the UI
                        before the action is completed.
                    </li>
                </ol>
            </details>
        </>
    )
}