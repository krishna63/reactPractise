import React, {useState, useTransition} from "react";
import {TabButton} from './TabButton';
import {AboutTab} from './AboutTab';
import {PostsTab} from './PostsTab';
import {ContactTab} from './ContactTab';
/**
 * Basically `useTransition` hook is used to update state without blocking the UI.
 * 
 * To mark a certain state update as "NON-URGENT", we used to leverage
 * setTransition.
 * 
 * Limitations:
 *  - we cannot pass asynchronous functions to `setTransition`
 */
export function AppWithTransition() {
    const [isPending, startTransition] = useTransition();
    const [tab, setTab] = useState('about');

    // @ts-ignore
    const selectTab = (nextTab) => {
        startTransition(() => {
           setTab(nextTab);
           /**
            * any error occured in this function then it will not be
            * caught by ErrorBoundary comonent
            */
            //throw new Error("Transitions with Error boundary are not supported in react 18")
        })
    }

    /**
     * isPending - used to indicate if a pending transition exists or not ?
     */
    return (
        <>
         <h2>With Transition</h2>
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
