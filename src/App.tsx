import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layout
import { RootLayout } from './RootLayout';

// Loading component
import LoadingOverlay from './components/LoadingOverlay';

// Lazy-loaded screens
const ApplicationsList = lazy(() => import('./screens/ApplicationsList'));
const CreateApplication = lazy(() => import('./screens/CreateApplication'));
const EditApplication = lazy(() => import('./screens/EditApplication'));

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<LoadingOverlay />}>
              <ApplicationsList />
            </Suspense>
          }
        />
        <Route
          path="/create"
          element={
            <Suspense fallback={<LoadingOverlay />}>
              <CreateApplication />
            </Suspense>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <Suspense fallback={<LoadingOverlay />}>
              <EditApplication />
            </Suspense>
          }
        />
        {/* Redirect any unknown routes to the home page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
