import React from 'react';

import { Button, Menu } from 'antd';
import { EyeOutlined, EditOutlined, LockOutlined, DeleteOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { crud } from '../../redux/crud/actions';
import { selectItemById } from '../../redux/crud/selectors';
import { useCrudContext } from '../../context/crud';
import uniqueId from '../../utils/uinqueId';
import DataTable from '../../components/DataTable';

function AddNewItem({ config }) {
  const { crudContextAction } = useCrudContext();
  const { collapsedBox, panel } = crudContextAction;
  const { ADD_NEW_ENTITY } = config;
  const handelClick = () => {
    panel.open();
    collapsedBox.close();
  };

  return (
    <Button onClick={handelClick} type="primary">
      {ADD_NEW_ENTITY}
    </Button>
  );
}
function dropDownRowMenu({ row, dispatch, crudContextAction }) {
  const { panel, collapsedBox, modal, advancedBox, readBox, editBox } = crudContextAction;
  const tableKeys = {show: 'admin-table-show', edit: 'admin-table-edit', delete: 'admin-table-delete', payment: 'in-table-payment', updatePassword: 'admin-table-updtae-password'}

  const show = () => {
    dispatch(crud.currentItem({ data: row }));
    panel.open();
    collapsedBox.open();
    readBox.open();
  };

  function edit() {
    dispatch(crud.currentItem({ data: row }));
    dispatch(crud.currentAction({ actionType: 'update', data: row }));
    editBox.open();
    panel.open();
    collapsedBox.open();
  }

  function updatePassword() {
    dispatch(crud.currentItem({ data: row }));
    dispatch(crud.currentAction({ actionType: 'update', data: row }));
    advancedBox.open();
    panel.open();
    collapsedBox.open();
  }
  function _delete() {
    dispatch(crud.currentAction({ actionType: 'delete', data: row }));
    modal.open();
  }

  const handelClick = (e) => {
    switch (e.key) {
      case tableKeys.show:
        show()
        break;
      case tableKeys.edit:
        edit()
        break;
      case tableKeys.delete:
        _delete()
        break;
      case tableKeys.updatePassword:
        updatePassword()
        break;
      default:
        break;
    }
  }

  return {
    items: [
      {icons: <EyeOutlined />, label: 'Show', key: tableKeys.show},
      {icons: <EditOutlined />, label: 'Edit', key: tableKeys.edit},
      {icons: <LockOutlined />, label: 'Update password', key: tableKeys.updatePassword},
      {icons: <DeleteOutlined />, label: 'Delete', key: tableKeys.delete},
    ],
    onClick: handelClick
  }
}

export default function AdminCrudModule({ config }) {
  return <DataTable config={config} dropDownRowMenu={dropDownRowMenu} AddNewItem={AddNewItem} isCrud={true} />;
}
