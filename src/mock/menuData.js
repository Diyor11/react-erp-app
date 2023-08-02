
import {
    AppstoreOutlined,
    SettingOutlined,
    MailOutlined,
    LogoutOutlined,
  } from '@ant-design/icons';
import {Avatar} from 'antd'
import photo from '../style/images/photo.png';

export function getMenuItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

export const getProfileMenu = () => {
    return [
        getMenuItem('Salah Eddine', 'avatra', <Avatar size="large" className="last" src={photo} style={{ float: 'left' }} />
        ),
        {type: 'divider'},
        getMenuItem('Navigation One', 'sub1', <MailOutlined />, [
          getMenuItem('Item 1', 'g1', null, [getMenuItem('Option 1', '1'), getMenuItem('Option 2', '2')], 'group'),
          getMenuItem('Item 2', 'g2', null, [getMenuItem('Option 3', '3'), getMenuItem('Option 3', '4')], 'group'),
        ]),
        getMenuItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
          getMenuItem('Option 5', '5'),
          getMenuItem('Option 6', '6'),
          getMenuItem('Submenu', 'sub3', null, [getMenuItem('Option 7', '7'), getMenuItem('Option 8', '8')]),
        ]),
        getMenuItem('Navigation Three', 'sub4', <SettingOutlined />, [
          getMenuItem('Option 9', '9'),
          getMenuItem('Option 10', '10'),
          getMenuItem('Option 11', '11'),
          getMenuItem('Option 12', '12'),
        ]),
        getMenuItem('Group', 'grp', null, [getMenuItem('Logout', 'logout', <LogoutOutlined />)], 'group'),
      ];
}