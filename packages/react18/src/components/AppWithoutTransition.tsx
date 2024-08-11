import React, { useState } from "react";
import {TabButton} from './TabButton';
import {AboutTab} from './AboutTab';
import {PostsTab} from './PostsTab';
import {ContactTab} from './ContactTab';

/**
 * Basically `useTransition` hook is used to update state without blocking the UI.
 * 
 * To mark a certain state update as "NON-URGENT", we used to leverage
 * startTransitions.
 * 
 * useTransition returns `isPending` and `StartTransition`
 * isPending - is a boolean value indicating if the transition is pending or not
 * startTransition - it is a function which can be wrapped around a state update to make
 * it less priority
 * 
 * Limitations:
 *  - we cannot pass asynchronous functions to `StartTransitions`
 *  - we cannot update input value in useTransition because updating the state value has to be
 * synchronous and it is blocking UI
 */
export function AppWithoutTransition() {
    const [tab, setTab] = useState('about');

    // @ts-ignore
    function selectTab(nextTab) {
        setTab(nextTab);
    }

    /**
     * isPending - used to indicate if a pending transition exists or not ?
     */
    return (
        <>
            <TabButton
                isActive={tab === 'about'}
                onClick={() => selectTab('about')}
            >
                About
            </TabButton>
            <TabButton
                isActive={tab === 'posts'}
                onClick={() => selectTab('posts')}
            >
                Posts (slow)
            </TabButton>
            <TabButton
                isActive={tab === 'contact'}
                onClick={() => selectTab('contact')}
            >
                Contact
            </TabButton>
            <hr />
            {tab === 'about' && <AboutTab />}
            {tab === 'posts' && <PostsTab />}
            {tab === 'contact' && <ContactTab />}
        </>
    )
}
