import React from 'react';
 import InvoiceModule from '../modules/InvoiceModule';
import { useMoney } from '../settings';
import {createInviceTable} from '../mock'

export default function Invoice() {
  const { moneyRowFormatter } = useMoney();

  const entity = 'invoice';
  const searchConfig = {
    displayLabels: ['name', 'surname'],
    searchFields: 'name,surname,birthday',
  };
  const entityDisplayLabels = ['number', 'client.company'];

  const PANEL_TITLE = 'Invoice';
  const dataTableTitle = 'Invoices Lists';
  const ADD_NEW_ENTITY = 'Add new invoice';
  const DATATABLE_TITLE = 'invoices List';
  const ENTITY_NAME = 'invoice';
  const CREATE_ENTITY = 'Save invoice';
  const UPDATE_ENTITY = 'Update invoice';

  const config = {
    entity,
    PANEL_TITLE,
    dataTableTitle,
    ENTITY_NAME,
    CREATE_ENTITY,
    ADD_NEW_ENTITY,
    UPDATE_ENTITY,
    DATATABLE_TITLE,
    dataTableColumns: createInviceTable(moneyRowFormatter),
    searchConfig,
    entityDisplayLabels,
  };
  return <InvoiceModule config={config} />;
}
