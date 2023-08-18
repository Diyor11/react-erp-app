import React from 'react';
import { Dropdown, Table } from 'antd';

import { request } from '../../request';
import useFetch from '../../hooks/useFetch';

import { EllipsisOutlined, EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';


const dropdownItems = [
  {icon: <EyeOutlined />, key: 'show', label: 'Show'},
  {icon: <EditOutlined />, key: 'edit', label: 'Edit'},
  {icon: <DeleteOutlined />, key: 'delete', label: 'Delete', danger: true},
]

export default function RecentTable({ ...props }) {
  let { entity, dataTableColumns, title } = props;
  dataTableColumns = [
    ...dataTableColumns,
    {
      title: 'ACtions',
      render: (row) => {
        const click = e => {
          // console.log(e.key, row.client)
        }

        return (
          <Dropdown menu={{items: dropdownItems, onClick: click}} trigger={['click']}>
            <EllipsisOutlined style={{ cursor: 'pointer', fontSize: '24px' }} />
          </Dropdown>
        )
      },
    },
  ];

  const asyncList = () => {
    return request.list({ entity });
  };
  const { result, isLoading, isSuccess } = useFetch(asyncList);
  const firstFiveItems = () => {
    if (isSuccess && result) return result.slice(0, 5);
    return [];
  };
  return (
    <>
      <div className="pad20">
        <h3 className='recent-box__title'>{title}</h3>
      </div>
      <Table
        columns={dataTableColumns}
        rowKey={(item) => item._id}
        dataSource={isSuccess && firstFiveItems()}
        pagination={false}
        loading={isLoading}
      />
    </>
  );
}
