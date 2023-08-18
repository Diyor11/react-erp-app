import { ErpLayout } from '../../layout';
import ErpPanel from '../../components/ErpPanel';
import InvoiceForm from './InvoiceForm';
import dataTableDropMenu from './DataTableDropMenu';

export default function InvoiceModule({ config }) {
  return (
    <ErpLayout>
      <ErpPanel
        config={config}
        CreateForm={InvoiceForm}
        UpdateForm={InvoiceForm}
        dataTableDropMenu={dataTableDropMenu}
      />
    </ErpLayout>
  );
}
