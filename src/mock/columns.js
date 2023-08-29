import {Tag} from 'antd'
import dayjs from 'dayjs';

export const dashboardTable = [
    {
        title: 'N#',
        dataIndex: 'number',
    },
    {
        title: 'Client',
        dataIndex: 'client',
    },

    {
        title: 'Total',
        dataIndex: 'total',

        render: (total) => `$ ${total}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' '),
    },
    {
        title: 'Status',
        dataIndex: 'status',
        render: (status) => {
        let color = status === 'Draft' ? 'volcano' : 'green';

        return <Tag color={color}>{status.toUpperCase()}</Tag>;
        },
    },
];

export const customerTable = [
    {
      title: 'Company',
      dataIndex: 'company',
    },
    {
      title: 'Manager Surname',
      dataIndex: 'managerSurname',
    },
    {
      title: 'Manager Name',
      dataIndex: 'managerName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
];

export const customerRead = [
    {
      title: 'Company',
      dataIndex: 'company',
    },
    {
      title: 'Manager Surname',
      dataIndex: 'managerSurname',
    },
    {
      title: 'Manager Name',
      dataIndex: 'managerName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
    },
];

export const createInviceTable = (moneyRowFormatter) => {

    return [
        {
          title: '#N',
          dataIndex: 'number',
        },
        {
          title: 'Client',
          dataIndex: 'client',
          render: (client) => client.company
        },
        {
          title: 'Date',
          dataIndex: 'date',
          render: (date) => {            
            return dayjs(date).format('DD/MM/YYYY');
          },
        },
        {
          title: 'Due date',
          dataIndex: 'expiredDate',
          render: (date) => {
            return dayjs(date).format('DD/MM/YYYY');
          },
        },
        {
          title: 'Total',
          dataIndex: 'total',
          // render: (amount) => moneyRowFormatter({ amount }),
          render: (data) => {
            return moneyRowFormatter({amount: data})
          }
        },
        {
          title: 'Balance',
          dataIndex: 'credit',
          render: (amount) => {            
            return moneyRowFormatter({ amount })
          },
        },
        {
          title: 'status',
          dataIndex: 'status',
          render: (status) => {
            let color = status === 'draft' ? 'cyan' : status === 'sent' ? 'magenta' : 'gold';
    
            return <Tag color={color}>{status && status.toUpperCase()}</Tag>;
          },
        },
        {
          title: 'Payment',
          dataIndex: 'paymentStatus',
          render: (paymentStatus) => {
            let color =
              paymentStatus === 'unpaid'
                ? 'volcano'
                : paymentStatus === 'paid'
                ? 'green'
                : paymentStatus === 'overdue'
                ? 'red'
                : 'purple';
    
            return <Tag color={color}>{paymentStatus && paymentStatus.toUpperCase()}</Tag>;
          },
        },
    ];
}

export const createQuoteTable = (moneyRowFormatter) => {

    return [
        {
          title: 'Number',
          dataIndex: 'number',
        },
        {
          title: 'Client',
          dataIndex: ['client', 'company'],
        },
        {
          title: 'Date',
          dataIndex: 'date',
          render: (date) => {
            return dayjs(date).format('DD/MM/YYYY');
          },
        },
        {
          title: 'Due date',
          dataIndex: 'expiredDate',
          render: (date) => {
            return dayjs(date).format('DD/MM/YYYY');
          },
        },
        {
          title: 'SubTotal',
          dataIndex: 'subTotal',
          render: (amount) => moneyRowFormatter({ amount }),
        },
        {
          title: 'Total',
          dataIndex: 'total',
          render: (amount) => moneyRowFormatter({ amount }),
        },
    
        {
          title: 'Status',
          dataIndex: 'status',
          render: (status) => {
            let color =
              status === 'draft'
                ? 'cyan'
                : status === 'sent'
                ? 'blue'
                : status === 'accepted'
                ? 'green'
                : status === 'expired'
                ? 'orange'
                : 'red';
            return <Tag color={color}>{status && status.toUpperCase()}</Tag>;
          },
        },
      ]
}

export const paymentReadCols = [
    {
      title: 'number',
      dataIndex: 'number',
    },
    {
      title: 'Client',
      dataIndex: 'client.company',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      isDate: true,
    },
    {
      title: 'Invoice Number',
      dataIndex: 'invoice.number',
    },
    {
      title: 'Invoice year',
      dataIndex: 'invoice.year',
    },
    {
      title: 'Payment Mode',
      dataIndex: 'paymentMode.name',
    },
    {
      title: 'updated ',
      dataIndex: 'updated',
      isDate: true,
    },
    {
      title: 'created ',
      dataIndex: 'created',
      isDate: true,
    },
];

export const paymentTable = [
    {
      title: 'number',
      dataIndex: 'number',
    },
    {
      title: 'Client',
      dataIndex: ['client', 'company'],
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      render: (date) => {
        return dayjs(date).format('DD/MM/YYYY');
      },
    },
    {
      title: 'Invoice Number',
      dataIndex: ['invoice', 'number'],
    },
    {
      title: 'Invoice year',
      dataIndex: ['invoice', 'year'],
    },
    {
      title: 'Payment Mode',
      dataIndex: ['paymentMode', 'name'],
    },
];

export const employeeTable = [
    {
      title: 'name',
      dataIndex: 'name',
    },
    {
      title: 'Surname',
      dataIndex: 'surname',
    },
    {
      title: 'birthday',
      dataIndex: 'birthday',
      render: (date) => {
        return dayjs(date).format('DD/MM/YYYY');
      },
    },
    {
      title: 'department',
      dataIndex: 'department',
    },
    {
      title: 'position',
      dataIndex: 'position',
    },
    {
      title: 'phone',
      dataIndex: 'phone',
    },
    {
      title: 'email',
      dataIndex: 'email',
    },
];

export const employeeReadCols = [
    {
      title: 'name',
      dataIndex: 'name',
    },
    {
      title: 'Surname',
      dataIndex: 'surname',
    },
    {
      title: 'birthday',
      dataIndex: 'birthday',
      isDate: true,
    },
    {
      title: 'birthplace',
      dataIndex: 'birthplace',
    },
    {
      title: 'gender',
      dataIndex: 'gender',
    },
    {
      title: 'department',
      dataIndex: 'department',
    },
    {
      title: 'position',
      dataIndex: 'position',
    },
    {
      title: 'address',
      dataIndex: 'address',
    },
    {
      title: 'state',
      dataIndex: 'state',
    },
    {
      title: 'phone',
      dataIndex: 'phone',
    },
    {
      title: 'email',
      dataIndex: 'email',
    },
];

export const adminReadCols = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Surname', dataIndex: 'surname' },
    { title: 'Email', dataIndex: 'email' },
    { title: "Role d'utilisateur", dataIndex: 'role.displayName' },
];

export const adminTable = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Surname', dataIndex: 'surname' },
    { title: 'Email', dataIndex: 'email' },
    { title: "Role d'utilisateur", dataIndex: ['role', 'displayName'] },
];