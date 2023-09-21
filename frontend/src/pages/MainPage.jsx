import React, {Suspense, lazy} from 'react';
import Skelethone from '../component/presentation/MainPage/Skelethone';

const StartRenderingContainer = lazy(() => import("../component/container/common/StartRenderingContainer"));

const MainPage = () => {
    return (
        <Suspense fallback={<Skelethone/>}>
            <StartRenderingContainer />
        </Suspense>
    );
};

export default MainPage;