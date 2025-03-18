import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';

// Create router configuration - we'll define the routes in App.tsx
const router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
  },
]);

// Type assertion since getElementById might return null
const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
