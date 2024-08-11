import React, { ChangeEvent, FormEvent, useState, useTransition, useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";

const buttonStyle = {
    border: '1px solid #dedede',
    borderRadius: '5px',
    width: '70px',
    height: '30px',
    color: 'white',
    backgroundColor: 'grey'
}

const updateFirstName = (uName: string) => {
    const url = '/saveUserName';
    return fetch(`${url}?uName=${uName}`)
}
export function PersistInput() {

    const [firstName, setFirstName] = useState<string>('')
    const [pending, setPending] = useState<boolean>(false)
    const [beResponse, setBEResponse] = useState<any>({ userNameInBE: '' });

    const handleUserNameChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setFirstName(target.value)
    }

    const handleUserNameSave = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPending(true);
        const resp = await updateFirstName(firstName);
        const saveNameResponse = await resp.json();
        setBEResponse(saveNameResponse)
        setPending(false)
    }

    return (
        <form onSubmit={handleUserNameSave}>
            <h3> Example: Without useTransition Hook </h3>
            <label htmlFor="personName"> User Name </label>
            <input id="personName"
                onChange={handleUserNameChange}
                value={firstName}
                autoCapitalize=""
                autoComplete="off"
            />
            {beResponse.userNameInBE && <p>Name is updated ::
                <b>{`${beResponse?.userNameInBE}!!!`}</b>
            </p>}
            <br />
            <button type="submit">
                {pending ? 'Updating...' : 'Update'}
            </button>
        </form>
    )
}

export function PersistInputWithTransition() {

    const [firstName, setFirstName] = useState<string>('')
    // const [pending, setPending] = useState<boolean>(false)
    const [beResponse, setBEResponse] = useState<any>({ userNameInBE: '' });
    const [isPending, startTransition] = useTransition();

    const handleUserNameChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setFirstName(target.value)
    }

    const handleUserNameSave = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // setPending(true);
        startTransition(async () => {
            const resp = await updateFirstName(firstName);
            const saveNameResponse = await resp.json();
            startTransition(() => {
                setBEResponse(saveNameResponse)
            })
        })
        //setPending(false)
    }

    return (
        <>
            <form onSubmit={handleUserNameSave}>
                <h3> Example: With useTransition Hook </h3>
                <label htmlFor="personName"> User Name </label>
                <input id="personName"
                    onChange={handleUserNameChange}
                    value={firstName}
                    autoCapitalize=""
                    autoComplete="off"
                />
                {beResponse.userNameInBE && <p>First name is updated ::
                    <b>{`${beResponse?.userNameInBE}!!!`}</b>
                </p>}
                <br />
                <button type="submit">
                    {isPending ? 'Updating...' : 'Save'}
                </button>
            </form>

            <details style={{ paddingTop: '10px' }}>
                <summary>Points to Remember </summary>
                <ol>
                    <li>
                        startTransition accepts <b>async</b> functions as well.
                    </li>
                    <li>
                        If <u>Multiple ongoing transitions</u> then React will batch them and commit
                        the changes when all the transitions are done.
                        In this case as we wrapped <em>updateFirstName</em>
                        in <em>startTransition</em>, all calls will be batched and the value
                        is commited only once.
                    </li>
                    <li>
                        Reduce boiler plate code for handling <em>Pending & Error</em> states.
                    </li>
                    <li>
                        <b>Limitation:</b> Any state update after the <u>await</u> keyword are not
                        marked in transition, so we need to mark them in <em>startTransition</em> untill the async context
                        is available.
                    </li>
                </ol>
            </details>
        </>
    )
}

export function PersistInputWithUseActionState() {

    /**
     * We no longer need a separate data state values as that is passed as a second argument for the useActionState hook
     * When form is submitted the action passed in to the hook will be called and return value will be
     * the value of the state. 
     * isPending is set to true at the begining of the transition and then it is automatically set to false
     * at the end of the transition
     *
     */
    const [beResponse, actionFromHook, isPending] = useActionState(async (currentValue: string, formData: FormData) => {
        const userProvidedFirstName = formData.get('fName') as string;
        console.log('-------')
        const resp = await updateFirstName(userProvidedFirstName);
        const saveNameResponse = await resp.json();
        return saveNameResponse;
    }, { userNameInBE: '' });

    return (
        <>
            <form action={actionFromHook}>
                <h3> Example: With useTransition Hook </h3>
                <label htmlFor="personName"> User Name </label>
                <input id="personName"
                    autoCapitalize=""
                    autoComplete="off"
                    name="fName"
                />
                {beResponse.userNameInBE && <p>First name is updated ::
                    <b>{`${beResponse?.userNameInBE}!!!`}</b>
                </p>}
                <br />
                {/* <button 
                    //formAction={actionFromHook}
                >
                    {isPending ? 'Updating...' : 'Save'}
                </button> */}
                <StyledButton />
            </form>

            <details style={{ paddingTop: '10px' }}>
                <summary>Points to Remember </summary>
                <ol>
                    <li>
                        useActionState takes in two arguments
                        <ul>
                            <li>
                                A function to execute when the form is submitted. it can be `async` or `sync` functinos.
                                The function receives currentValue and formData as an argument.
                            </li>
                            <li>
                                Second argument is form default state value, ideally that would be set.
                            </li>
                        </ul>
                    </li>
                    <li>
                        It returns an array of 3 items:
                        - state: form state values
                        - action: the function that has to be called
                        - isPending: pending state of the transition.
                    </li>
                    <li>
                        Reduce boiler plate code for handling <em>Pending & Error</em> states.
                    </li>
                    <li>
                        It can be passed in as inline function to action prop of form or formAction prop of button
                        <br />
                        <code style={{ backgroundColor: "yellow" }}>
                            {`<button type="submit" formAction={actionFromHook}>
                                Save
                            </button>`}
                        </code>
                    </li>
                </ol>
            </details>
        </>
    )
}

const StyledButton = () => {
    /**
     * useFormStatus has to be imported from `react-dom` not from `react`.
     * useFormStatus is one more hook provided in react 19 which can be used in the children component to know the
     * form status fo the last submission. 
     * - It returns the status of the parent Form, but not any other Form element that is rendered along the page
     * or component.
     * It returns an object
     *  - data - values of the form fields
     *  - pending - the transition status of the form
     *  - method - if it is get or post
     *  - action - function that has to be triggered when the form is submitted.
     * 
     * Note: Obviously this has to be used only in the children of form components just like content API
     */
    const {
        data: formData,
        pending: isPending,
        method,
        action
    } = useFormStatus();

    // Need to revisit this example once again
    return (

        <button style={buttonStyle}
        >
            {isPending ? 'Persisting...' : 'Save'}
        </button>

    )
}