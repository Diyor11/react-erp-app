import React from 'react';

import QuoteModule from '../modules/QuoteModule';
import { useMoney } from '../settings';
import {createQuoteTable} from '../mock'

export default function Quote() {
  const { moneyRowFormatter } = useMoney();

  const entity = 'quote';
  const searchConfig = {
    displayLabels: ['name', 'surname'],
    searchFields: 'name,surname,birthday',
  };
  const entityDisplayLabels = ['number', 'client.company'];

  const PANEL_TITLE = 'quote';
  const dataTableTitle = 'quotes Lists';
  const ADD_NEW_ENTITY = 'Add new quote';
  const DATATABLE_TITLE = 'quotes List';
  const ENTITY_NAME = 'quote';
  const CREATE_ENTITY = 'Save quote';
  const UPDATE_ENTITY = 'Update quote';

  const config = {
    entity,
    PANEL_TITLE,
    dataTableTitle,
    ENTITY_NAME,
    CREATE_ENTITY,
    ADD_NEW_ENTITY,
    UPDATE_ENTITY,
    DATATABLE_TITLE,
    dataTableColumns: createQuoteTable(moneyRowFormatter),
    searchConfig,
    entityDisplayLabels,
  };
  return <QuoteModule config={config} />;
}
