import React from 'react';

import CrudModule from '../modules/CrudModule';
import EmployeeForm from '../forms/EmployeeForm';

import {employeeTable, employeeReadCols} from '../mock'
export default function Employee() {
  const entity = 'employee';
  const searchConfig = {
    displayLabels: ['name', 'surname'],
    searchFields: 'name,surname,birthday',
    outputValue: '_id',
  };

  const entityDisplayLabels = ['name', 'surname'];


  const ADD_NEW_ENTITY = 'Add new employee';
  const DATATABLE_TITLE = 'employees List';
  const ENTITY_NAME = 'employee';
  const CREATE_ENTITY = 'Create employee';
  const UPDATE_ENTITY = 'Update employee';
  const PANEL_TITLE = 'Employee Panel';

  const config = {
    entity,
    PANEL_TITLE,
    ENTITY_NAME,
    CREATE_ENTITY,
    ADD_NEW_ENTITY,
    UPDATE_ENTITY,
    DATATABLE_TITLE,
    readColumns: employeeReadCols,
    dataTableColumns: employeeTable,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <CrudModule
      createForm={<EmployeeForm />}
      updateForm={<EmployeeForm isUpdateForm={true} />}
      config={config}
    />
  );
}
