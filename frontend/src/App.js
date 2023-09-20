import React, { Suspense, lazy } from "react"
import { HashRouter, Route, Routes } from "react-router-dom"

const StartPage = lazy(() => import("./pages/StartPage"));
const MainPage = lazy(() => import("./pages/MainPage"));

const App = () => {
  return (
    <HashRouter>
      <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route path='/' element={<StartPage />} />
            <Route path='/main' element={<MainPage />} />
          </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default App;