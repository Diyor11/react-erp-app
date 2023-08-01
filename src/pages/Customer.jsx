import React from 'react';

import CrudModule from '../modules/CrudModule';
import CustomerForm from '../forms/CustomerForm';
import {customerTable as dataTableColumns, customerRead } from '../mock'

function Customer() {
  const entity = 'client';
  const searchConfig = {
    displayLabels: ['company'],
    searchFields: 'company,managerSurname,managerName',
    outputValue: '_id',
  };

  const entityDisplayLabels = ['company'];

  const ADD_NEW_ENTITY = 'Add new customer';
  const DATATABLE_TITLE = 'customers List';
  const ENTITY_NAME = 'customer';
  const CREATE_ENTITY = 'Create customer';
  const UPDATE_ENTITY = 'Update customer';
  const PANEL_TITLE = 'Customer Panel';

  const config = {
    entity,
    PANEL_TITLE,
    ENTITY_NAME,
    CREATE_ENTITY,
    ADD_NEW_ENTITY,
    UPDATE_ENTITY,
    DATATABLE_TITLE,
    readColumns: customerRead,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <CrudModule
      createForm={<CustomerForm />}
      updateForm={<CustomerForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default Customer;
