import React, { useCallback, useEffect } from 'react';
import { Dropdown, Button, Table } from 'antd';
import {PageHeader} from '@ant-design/pro-layout'

import { EllipsisOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { crud } from '../../redux/crud/actions';
import { selectListItems } from '../../redux/crud/selectors';

import uniqueId from '../../utils/uinqueId';
import { useCrudContext } from '../../context/crud';

export default function DataTable({ config, dropDownRowMenu, AddNewItem }) {
  let { entity, dataTableColumns, dataTableTitle } = config;

  const { crudContextAction } = useCrudContext();
  const dispatch = useDispatch();

  dataTableColumns = [
    ...dataTableColumns,
    {
      title: 'ACtions',
      render: (row) => {
        // console.log(row)
        // {items: [{label: 'show', key: '1'}]}
        return(
          <Dropdown menu={dropDownRowMenu(row, crudContextAction, dispatch)} trigger={['click']}>
            <EllipsisOutlined style={{ cursor: 'pointer', fontSize: '24px' }} />
          </Dropdown>
        )
      },
    },
  ];

  const { result: listResult, isLoading: listIsLoading } = useSelector(selectListItems);

  const { pagination, items } = listResult;


  const handelDataTableLoad = useCallback((page) => {
    const options = { page: page.current|| 1 };
    dispatch(crud.list({ entity, options}));
  }, [dispatch, entity]);

  useEffect(() => {
    dispatch(crud.list({ entity }));
  }, [dispatch, entity]);

  return (
    <>
      <PageHeader
        onBack={() => window.history.back()}
        title={dataTableTitle}
        ghost={false}
        extra={[
          <Button onClick={() => handelDataTableLoad(pagination)} key={`${uniqueId()}`}>
            Refresh
          </Button>,
          <AddNewItem key={`${uniqueId()}`} config={config} />,
        ]}
        style={{
          padding: '20px 0px',
        }}
      ></PageHeader>
      <Table
        columns={dataTableColumns}
        rowKey={(item) => item._id}
        dataSource={items}
        pagination={pagination}
        loading={listIsLoading}
        onChange={(data) => handelDataTableLoad(data)}
      />
    </>
  );
}
