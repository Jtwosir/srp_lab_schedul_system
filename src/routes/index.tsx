import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Login from '../pages/Login';
import Schedule from '../pages/Schedule';
import CourseRequest from '../pages/CourseRequest';
import Review from '../pages/Review';
import Profile from '../pages/Profile';
import { UserRole } from '../types/auth';

const teacherRoutes = [
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
];

const adminRoutes = [
  {
    path: 'schedule',
    element: <Schedule />,
  },
  {
    path: 'review',
    element: <Review />,
  },
  {
    path: 'profile',
    element: <Profile />,
  },
];

export const getRoutes = (role: UserRole) => {
  const routes = [
    {
      path: '/',
      element: <Layout />,
      children: role === 'teacher' ? teacherRoutes : adminRoutes,
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