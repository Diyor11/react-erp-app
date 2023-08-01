import React, {lazy} from 'react';
import { Navigate } from 'react-router-dom';

const Logout = lazy(() => import('../pages/Logout'));
const NotFound = lazy(() => import('../pages/NotFound'));

const Dashboard = lazy(() => import('../pages/Dashboard'));
const Customer = lazy(() => import('../pages/Customer'));
const Invoice = lazy(() => import('../pages/Invoice'));
const Quote = lazy(() => import('../pages/Quote'));
const PaymentInvoice = lazy(() => import('../pages/PaymentInvoice'));
const Employee = lazy(() => import('../pages/Employee'));
const Admin = lazy(() => import('../pages/Admin'));
const Settings = lazy(() => import('../pages/Settings/Settings'));
const PaymentMode = lazy(() => import('../pages/PaymentMode'));
const Role = lazy(() => import('../pages/Role'));
// import {
//   DesktopOutlined,
//   SettingOutlined,
//   CustomerServiceOutlined,
//   FileTextOutlined,
//   FileSyncOutlined,
//   DashboardOutlined,
//   TeamOutlined,
//   UserOutlined,
//   CreditCardOutlined,
//   BankOutlined,
// } from "@ant-design/icons";

// export const IconMenu = ({ name }) => {
//   const components = {
//     DesktopOutlined: DesktopOutlined,
//     SettingOutlined: SettingOutlined,
//     CustomerServiceOutlined: CustomerServiceOutlined,
//     FileTextOutlined: FileTextOutlined,
//     FileSyncOutlined: FileSyncOutlined,
//     DashboardOutlined: DashboardOutlined,
//     TeamOutlined: TeamOutlined,
//     UserOutlined: UserOutlined,
//     CreditCardOutlined: CreditCardOutlined,
//     BankOutlined: BankOutlined,
//     Default: DesktopOutlined,
//   };

//   const IconTag = components[name || "Default"] || SettingOutlined;
//   return <IconTag />;
// };

export const routesConfig = [
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/customer',
    element: <Customer />,
  },
  {
    path: '/invoice',
    element: <Invoice />,
  },
  {
    path: '/quote',
    element: <Quote />,
  },
  {
    path: '/payment/invoice',
    element: <PaymentInvoice />,
  },
  {
    path: '/employee',
    element: <Employee />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
  {
    path: '/payment/mode',
    element: <PaymentMode />,
  },
  {
    path: '/role',
    element: <Role />,
  },
  {path: '/login', element: <Navigate to='/'/>}, 
  {path: '/logout', element: <Logout />},
  {path: '*', element: <NotFound />},
];
