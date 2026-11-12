import { createBrowserRouter } from 'react-router';
import Layout from './components/layout/Layout';
import CertificationsPage from './pages/CertificationsPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';

/**
 * All routes share Layout (navbar, footer, skip link).
 * Adding a route? Also add it to ROUTES in vite.config.js so it's in the sitemap.
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'skills', element: <SkillsPage /> },
      { path: 'certifications', element: <CertificationsPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
