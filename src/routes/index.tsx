import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Login from '../pages/Login';
import Schedule from '../pages/Schedule';
import CourseRequest from '../pages/CourseRequest';
import Review from '../pages/Review';
import Profile from '../pages/Profile';
import { UserRole } from '../types/auth';

const toolRoutes = [
  {
    path: 'schedule',
    element: <Schedule />,
  },
  {
    path: 'course-request',
    element: <CourseRequest />,
  },
  {
    path: 'profile',
    element: <Profile />,
  },
  {
    path: 'review',
    element: <Review />,
  },
];

export const getRoutes = (role: UserRole) => {
  const routes = [
    {
      path: '/',
      element: <Layout />,
      children: toolRoutes,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '*',
      element: <Navigate to="/schedule" replace />,
    },
  ];

  return createBrowserRouter(routes);
};
