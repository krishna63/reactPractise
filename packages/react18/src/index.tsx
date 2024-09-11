import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
// import { router } from './routes';
// import { App } from './App';

function Test() {
    return (<p>Test react router</p>)
}

// Render your React component instead
const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <BrowserRouter >
            <Routes>
                <Route path='/' Component={Test}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);