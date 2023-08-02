import React from 'react';
import { Avatar, Badge, Dropdown } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  BellOutlined,
  AppstoreOutlined
} from '@ant-design/icons';

import photo from '../../style/images/photo.png';
import {getProfileMenu} from '../../mock'

export default function HeaderContent() {
  const navigate = useNavigate()

  const clickMenuItem = (e) => {
    if(e.key === 'logout') {
      navigate('/logout')
    }
  }

  return (
    <div className="headerIcon" style={{ position: 'absolute', right: 0, zIndex: '99' }}>
      <Dropdown  
        menu={{items: getProfileMenu(), onClick: clickMenuItem}} 
        trigger={['click']} 
        placement="bottomRight"
      >
        <Avatar className="last" src={photo} />
      </Dropdown>
      <Avatar icon={<AppstoreOutlined />} />
      <Avatar icon={<BellOutlined />} />
    </div>
  );
}
