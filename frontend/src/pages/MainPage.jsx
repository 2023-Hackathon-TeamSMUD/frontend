import React, {Suspense, lazy} from 'react';
import Skelethone from '../component/presentation/MainPage/Skelethone';

// const MainInformation1 = lazy(() => import("../component/presentation/MainPage/MainInformation1"))
// const Camera = lazy(() => import("../component/presentation/MainPage/Camera"));
const StartRendering = lazy(() => import("../component/presentation/MainPage/StartRendering"));

const MainPage = () => {
    return (
        <Suspense fallback={<Skelethone/>}>
            <StartRendering />
        </Suspense>
    );
};

export default MainPage;