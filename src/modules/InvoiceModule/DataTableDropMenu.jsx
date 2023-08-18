import { Menu } from 'antd';

import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  FilePdfOutlined,
  CreditCardOutlined,
} from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { erp } from '../../redux/erp/actions';
import { selectListItems, selectItemById } from '../../redux/erp/selectors';
import { useErpContext } from '../../context/erp';

import { DOWNLOAD_BASE_URL } from '../../config/serverApiConfig';
import uniqueId from '../../utils/uinqueId';

export default function dataTableDropMenu({ row, entity, dispatch, erpContextAction }) {
  const { readPanel, updatePanel, recordPanel, modal } = erpContextAction;
  const tableKeys = {show: 'in-table-show', edit: 'in-table-edit', delete: 'in-table-delete', payment: 'in-table-payment', download: 'in-table-download'}

  function read() {
    dispatch(erp.currentItem({ data: row }));
    readPanel.open();
  }
  function recordPayment() {
    dispatch(erp.currentAction({ actionType: 'recordPayment', data: row }));
    recordPanel.open();
    dispatch(erp.currentItem({ data: row }));
  }
  function edit() {
    dispatch(erp.currentAction({ actionType: 'update', data: row }));
    updatePanel.open();
  }
  function _delete() {
    dispatch(erp.currentAction({ actionType: 'delete', data: row }));
    modal.open();
  }
  function download() {
    window.open(`${DOWNLOAD_BASE_URL}${entity}/${entity}-${row._id}.pdf`, '_blank');
  }
  // return (
  //   <Menu style={{ minWidth: 130 }}>
  //     <Menu.Item key={`${uniqueId()}`} icon={<EyeOutlined />} onClick={Read}>
  //       Show
  //     </Menu.Item>
  //     <Menu.Item key={`${uniqueId()}`} icon={<CreditCardOutlined />} onClick={RecordPayment}>
  //       Record Payment
  //     </Menu.Item>
  //     <Menu.Item key={`${uniqueId()}`} icon={<EditOutlined />} onClick={Edit}>
  //       Edit
  //     </Menu.Item>
  //     <Menu.Item key={`${uniqueId()}`} icon={<FilePdfOutlined />} onClick={Download}>
  //       Download
  //     </Menu.Item>
  //     <Menu.Item key={`${uniqueId()}`} icon={<DeleteOutlined />} onClick={Delete}>
  //       Delete
  //     </Menu.Item>
  //   </Menu>
  // );

  const handelClick = (e) => {
    switch (e.key) {
      case tableKeys.show:
        read()
        break;
      case tableKeys.edit:
        edit()
        break;
      case tableKeys.delete:
        _delete()
        break;
      case tableKeys.payment:
        recordPayment()
        break;
      case tableKeys.download:
        download()
        break;
      default:
        break;
    }
  }

  return {
    items: [
      {icons: <EyeOutlined />, label: 'Show', key: tableKeys.show},
      {icons: <CreditCardOutlined />, label: 'Record Payment', key: tableKeys.payment},
      {icons: <EyeOutlined />, label: 'Edit', key: tableKeys.edit},
      {icons: <FilePdfOutlined />, label: 'Download', key: tableKeys.download},
      {icons: <DeleteOutlined />, label: 'Delete', key: tableKeys.delete},
    ],
    onClick: handelClick
  }
}
