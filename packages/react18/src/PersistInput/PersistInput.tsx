import React, { useState } from "react";

const saveUserName = (uName) => {
    const url = '/saveUserName';
    return fetch(`${url}?uName=${uName}`)
}

export function PersistInput() {

    const [firstName, setFirstName] = useState<string>('')
    const [pending, setPending] = useState<boolean>(false)
    const [beResponse, setBEResponse] = useState<any>({ userNameInBE: '' });

    const handleUserNameChange = ({ target }) => {
        setFirstName(target.value)
    }

    const handleUserNameSave = async (e) => {
        e.preventDefault();
        setPending(true);
        const resp = await saveUserName(firstName);
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
            <button type="submit"
                 onClick={handleUserNameSave}>
                {pending ? 'Updating...' : 'Update'}
            </button>
        </form>
    )
}
