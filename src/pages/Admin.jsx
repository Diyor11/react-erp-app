import React from 'react';

import AdminCrudModule from '../modules/AdminCrudModule';
import AdminForm from '../forms/AdminForm';

import {adminReadCols, adminTable} from '../mock'

export default function Admin() {
  const entity = 'admin';
  const searchConfig = {
    displayLabels: ['name', 'surname'],
    searchFields: 'email,name,surname',
    outputValue: '_id',
  };

  const PANEL_TITLE = 'Admin Panel';
  const dataTableTitle = 'Admin Lists';
  const entityDisplayLabels = ['email'];


  const ADD_NEW_ENTITY = 'Add new admin';
  const DATATABLE_TITLE = 'Admins List';
  const ENTITY_NAME = 'admin';
  const CREATE_ENTITY = 'Create admin';
  const UPDATE_ENTITY = 'Update admin';

  const config = {
    entity,
    PANEL_TITLE,
    dataTableTitle,
    ENTITY_NAME,
    CREATE_ENTITY,
    ADD_NEW_ENTITY,
    UPDATE_ENTITY,
    DATATABLE_TITLE,
    readColumns: adminReadCols,
    dataTableColumns: adminTable,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <AdminCrudModule
      createForm={<AdminForm />}
      updateForm={<AdminForm isUpdateForm={true} />}
      config={config}
    />
  );
}
