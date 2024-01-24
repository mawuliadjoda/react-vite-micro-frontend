import React, { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Loader from './component/Loader';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

// import RemoteA from "remoteA/App"
// import RemoteB from "remoteB/App"
const RemoteA = React.lazy(() => import("remoteA/App"));
const RemoteB = React.lazy(() => import("remoteB/App"));

function App() {


  return (
    <>

    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/remote_a/*" element={<RemoteA />} />
        <Route path="/remote_b/*" element={<RemoteB />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
    </>

  )
}

export default App