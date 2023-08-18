import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import { useAppContext } from '../../context/appContext';
import logoIcon from '../../style/images/logo-icon.png';
import logoText from '../../style/images/logo-text.png';

import {
  SettingOutlined,
  CustomerServiceOutlined,
  FileTextOutlined,
  FileSyncOutlined,
  DashboardOutlined,
  TeamOutlined,
  UserOutlined,
  CreditCardOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const menuItems = [
  {key: 'Dashboard', icon: <DashboardOutlined />, label: <><NavLink to={'/'} />Dashboard</>},
  {key: 'Customer', icon: <CustomerServiceOutlined />, label: <><NavLink to={'/customer'} />Customer</>},
  {key: 'Invoice', icon: <FileTextOutlined />, label: <><NavLink to={'/invoice'} />Invoice</>},
  {key: 'Quote', icon: <FileSyncOutlined />, label: <><NavLink to={'/quote'} />Quote</>},
  {key: 'PaymentInvoice', icon: <CreditCardOutlined />, label: <><NavLink to={'/payment/invoice'} />Payment Invoice</>},
  {key: 'Employee', icon: <UserOutlined />, label: <><NavLink to={'/employee'} />Employee</>},
  {key: 'Admin', icon: <TeamOutlined />, label: <><NavLink to={'/admin'} />Admin</>},
  {key: 'Settings', icon: <SettingOutlined />, label: <><NavLink to={'/settings'} />Settings</>, children: [
    {key: 'SettingsPage', label: <><NavLink to={'/settings'} />General Settings</>},
    {key: 'PaymentMode', label: <><NavLink to={'/payment/mode'} />Payment Mode</>},
    {key: 'Role', label: <><NavLink to={'/role'} />Role</>},
  ]},
]

export default function Navigation() {
  const { state: stateApp, appContextAction } = useAppContext();
  const { isNavMenuClose } = stateApp;
  const { navMenu } = appContextAction;
  const [showLogoApp, setLogoApp] = useState(isNavMenuClose);

  useEffect(() => {
    if (isNavMenuClose) {
      setLogoApp(isNavMenuClose);
    }
    const timer = setTimeout(() => {
      if (!isNavMenuClose) {
        setLogoApp(isNavMenuClose);
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [isNavMenuClose]);
  const onCollapse = () => {
    navMenu.collapse();
  };

  return (
    <>
      <Sider collapsible collapsed={isNavMenuClose} onCollapse={onCollapse} className="navigation">
        <div className="logo">
          <img
            src={logoIcon}
            alt="Logo"
            // style={{ margin: "0 auto 40px", display: "block" }}
          />

          {!showLogoApp && (
            <img src={logoText} alt="Logo" style={{ marginTop: '3px', marginLeft: '10px' }} />
          )}
        </div>
        <Menu items={menuItems} mode="inline" />
      </Sider>
    </>
  );
}
