import React from "react";
import { createBrowserRouter, useRouteError } from "react-router-dom";
import { App } from "./App";
import { AppWithoutTransition } from './components/AppWithoutTransition'
import { AppWithTransition } from './components/AppWithTransition';
import { PersistInput } from './PersistInput/PersistInput';

function ErrorPage() {
    const error = useRouteError()
    return (
        <div><h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    // {
    //     path: "/appWithoutTransition",
    //     element: <AppWithoutTransition />,
    //     errorElement: <ErrorPage />,
    // },
    // {
    //     path: "/appWithTransition",
    //     element: <AppWithTransition />,
    //     errorElement: <ErrorPage />,
    // },
    // {
    //     path: "/persistInput",
    //     element: <PersistInput />,
    //     errorElement: <ErrorPage />,
    // }
])