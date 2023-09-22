import React, {Suspense, lazy, useState} from 'react';
import { useRoutes } from 'react-router-dom';
import Skelethone from '../component/presentation/MainPage/Skelethone';
const StartRenderingContainer = lazy(() => import("../component/container/common/StartRenderingContainer"));
const MainCameraContainer = lazy(() => import('../component/container/MainPage/MainCameraContainer'));
const ResultSockColorContainer = lazy(() => import('../component/container/MainPage/ResultSockColorContainer'));
const SelectGenderContainer = lazy(() => import('../component/container/MainPage/SelectGenderContainer'));

export default function MainPage({gender, setGender, webcamRef, capturePhoto, captures, showServerModal, uploadData}) {

  let element = useRoutes([
    {
      path: '/',
      element: (
        <Suspense fallback={<Skelethone/>}>
          <StartRenderingContainer type={1}/>
        </Suspense>
      ),
    },
    {
      path: 'shot',
      element: (
        <Suspense fallback={<></>}>
          <MainCameraContainer 
            webcamRef={webcamRef}
            capturePhoto={capturePhoto}
            captures={captures}
            showServerModal={showServerModal}
          />
        </Suspense>
      ),
    },
    {
      path: 'color',
      element: (
        <Suspense fallback={<></>}>
          <ResultSockColorContainer />
        </Suspense>
      ),
    },
    {
      path: 'gender',
      element: (
        <Suspense fallback={<></>}>
          <SelectGenderContainer
            gender={gender}
            setGender={setGender}
            uploadData={uploadData}
            captures={captures}
          />
        </Suspense>
      ),
    },
  ]);

  return element;
}
