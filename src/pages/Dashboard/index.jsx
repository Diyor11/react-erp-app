import React from 'react';
import {  Divider, Row, Col } from 'antd';

import {  Statistic, Progress } from 'antd';
import {dashboardTable} from '../../mock'

import { ArrowUpOutlined } from '@ant-design/icons';

import { DashboardLayout } from '../../layout';
import RecentTable from '../../components/RecentTable';
import CardList from './CardList';
import PreViewbox from './PreViewbox';

const cardsData = [
  {title: 'Invoice', tagColor: 'cyan', prefix: 'This month', tagContent: '34 000 $' },
  {title: 'Quote', tagColor: 'purple', prefix: 'This month', tagContent: '34 000 $' },
  {title: 'Payment', tagColor: 'green', prefix: 'This month', tagContent: '34 000 $' },
  {title: 'Due Balance', tagColor: 'red', prefix: 'Not Paid', tagContent: '34 000 $' },
]

const previewData = [
  {title: 'Invoice Preview', states: [
    {tag: 'Draft', color: 'grey', value: 3},
    {tag: 'Pending', color: 'bleu', value: 5},
    {tag: 'Not Paid', color: 'orange', value: 12},
    {tag: 'Overdue', color: 'red', value: 6},
    {tag: 'Partially Paid', color: 'cyan', value: 8},
    {tag: 'Paid', color: 'green', value: 55},
  ]},
  {title: 'Quote Preview', states: [
    {tag: 'Draft', color: 'grey', value: 3},
    {tag: 'Pending', color: 'bleu', value: 5},
    {tag: 'Not Paid', color: 'orange', value: 12},
    {tag: 'Overdue', color: 'red', value: 6},
    {tag: 'Partially Paid', color: 'cyan', value: 8},
    {tag: 'Paid', color: 'green', value: 55},
  ]},
  {title: 'Offer Preview', states: [
    {tag: 'Draft', color: 'grey', value: 3},
    {tag: 'Pending', color: 'bleu', value: 5},
    {tag: 'Not Paid', color: 'orange', value: 12},
    {tag: 'Overdue', color: 'red', value: 6},
    {tag: 'Partially Paid', color: 'cyan', value: 8},
    {tag: 'Paid', color: 'green', value: 55},
  ]}
]

export default function Dashboard() {

  return (
    <DashboardLayout>
      <Row gutter={[24, 24]}>
        <CardList cardsData={cardsData} />
      </Row>
      <div className="space30"></div>
      <Row gutter={[24, 24]}>
        <Col
          className="gutter-row"
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 18 }}
        >
          <div className="whiteBox shadow" style={{ minHeight: '380px' }}>
            <Row className="pad10" gutter={[0, 0]}>
              {previewData.map((data, index) => (
                <Col
                  key={index}
                  className="gutter-row"
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 8 }}
                  lg={{ span: 8 }}
                >
                  <PreViewbox {...data} />
              </Col>
              ))}
            </Row>
          </div>
        </Col>

        <Col
          className="gutter-row"
          xs={{ span: 0 }}
          sm={{ span: 0 }}
          md={{ span: 0 }}
          lg={{ span: 6 }}
        >
          <div className="whiteBox shadow" style={{ height: '380px' }}>
            <div
              className="pad20"
              style={{
                textAlign: 'center',
                justifyContent: 'center',
              }}
            >
              <h3 style={{ color: '#22075e', marginBottom: 30 }}>Customer Preview</h3>

              <Progress type="dashboard" percent={25} size={148} />
              <p>New Customer this Month</p>
              <Divider />
              <Statistic
                title="Active Customer"
                value={11.28}
                precision={2}
                valueStyle={{ color: '#3f8600' }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </div>
          </div>
        </Col>
      </Row>
      <div className="space30"></div>
      <Row gutter={[24, 24]}>
        <Col
          className="gutter-row"
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
        >
          <div className="whiteBox shadow">
            <RecentTable entity={'invoice'} title='Recent Invoices' dataTableColumns={dashboardTable} />
          </div>
        </Col>

        <Col
          className="gutter-row"
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
        >
          <div className="whiteBox shadow">
            <RecentTable entity={'quote'} title='Recent Quotes' dataTableColumns={dashboardTable} />
          </div>
        </Col>
      </Row>
    </DashboardLayout>
  );
}
