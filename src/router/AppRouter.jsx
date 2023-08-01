import React, { Suspense } from 'react';
import {useRoutes} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageLoader from '../components/PageLoader';
import { routesConfig } from './RoutesConfig';

export default function AppRouter() {
  const routes = useRoutes(routesConfig);
  console.log('render app eoyter')
  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence  initial={false}>
          {routes}
      </AnimatePresence>
    </Suspense>
  );
}
