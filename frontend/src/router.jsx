import {createBrowserRouter, Navigate} from 'react-router-dom'
import Login from './views/Login'
import NotFound from './views/NotFound';
import Signup from './views/Signup';
import Users from './views/Users';
import DefaultLayout from './components/DefaultLayout'
import GuestLayout from './components/GuestLayout'
import UserForm from './views/UserForm';
import Attendance from './views/ta/Attendance';
import Overtimes from './views/ta/Overtimes';
import OvertimeApproval from './views/ta/OvertimeApproval';
import Dashboard from './components/maindash/Dashboard';
import Workflows from './views/workflow/Workflows';
import WorkflowModal from './views/workflow/WorkflowModal';

const router = createBrowserRouter( [
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/dashboard" />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/attendance',
                element: <Attendance />
            },
            {
                path: '/overtimes',
                element: <Overtimes />
            },
            {
                path: '/overtimes/:id',
                element: <OvertimeApproval key="overtimeApproval" />
            },
            {
                path: '/users',
                element: <Users />
            },
            {
                path: '/users/new',
                element: <UserForm key="userCreate" />
            },
            {
                path: '/users/:id',
                element: <UserForm key="userUpdate" />
            },
            {
                path: '/workflows',
                element: <Workflows />
            },
            {
                path: '/workflows/:id',
                element: <WorkflowModal key="workflowUpdate" />
            },
        ]
    },
    {
        path: '',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
        ]
    },

    {
        path: '*',
        element: <NotFound />
    },
])

export default router;