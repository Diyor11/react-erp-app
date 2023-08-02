import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PublicRoute from './PublicRoute';
import PageLoader from '../components/PageLoader';

const Login = lazy(() => import(/*webpackChunkName:'LoginPage'*/ '../pages/Login'));

const NotFound = lazy(() => import(/*webpackChunkName:'NotFoundPage'*/ '../pages/NotFound'));

export default function AuthRouter() {
  console.log('auth route')
  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence initial={false}>
        <Routes>
          <Route path='/' element={
            <PublicRoute component={Login} />
          } />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}
