import React from 'react';

import CrudModule from '../modules/CrudModule';
import PaymentInvoiceForm from '../forms/PaymentInvoiceForm';
import { paymentReadCols, paymentTable } from '../mock';


export default function PaymentInvoice() {
  const entity = 'paymentInvoice';
  const searchConfig = {
    displayLabels: ['number'],
    searchFields: 'number',
    outputValue: '_id',
  };

  const entityDisplayLabels = ['number'];


  const ADD_NEW_ENTITY = 'Add new payment';
  const DATATABLE_TITLE = 'payments List';
  const ENTITY_NAME = 'payment';
  const CREATE_ENTITY = 'Create payment';
  const UPDATE_ENTITY = 'Update payment';
  const PANEL_TITLE = 'Currency Panel';

  const config = {
    entity,
    PANEL_TITLE,
    ENTITY_NAME,
    CREATE_ENTITY,
    ADD_NEW_ENTITY,
    UPDATE_ENTITY,
    DATATABLE_TITLE,
    readColumns: paymentReadCols,
    dataTableColumns: paymentTable,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <CrudModule
      createForm={<PaymentInvoiceForm />}
      updateForm={<PaymentInvoiceForm isUpdateForm={true} />}
      config={config}
    />
  );
}
