import React from 'react';

import { Button, Menu } from 'antd';
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
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
function dropDownRowMenu({row, crudContextAction, dispatch}) {
  const { panel, collapsedBox, modal, readBox, editBox } = crudContextAction;
  const tableKeys = {show: 'cr-table-show', edit: 'cr-table-edit', delete: 'cr-table-delete'}

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
      default:
        break;
    }
  }

  return {
    items: [
      {icon: <EyeOutlined />, key: tableKeys.show, label: 'Show'},
      {icon: <EditOutlined />, key: tableKeys.edit, label: 'Edit'},
      {icon: <DeleteOutlined />, key: tableKeys.delete, label: 'Delete'}
    ],
    onClick: handelClick
  }
}

export default function CrudDataTable({ config }) {
  return <DataTable config={config} dropDownRowMenu={dropDownRowMenu} AddNewItem={AddNewItem} />;
}
