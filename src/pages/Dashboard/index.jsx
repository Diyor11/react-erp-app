import React from 'react';
import {  Divider, Row, Col } from 'antd';

import {  Statistic, Progress } from 'antd';
import {dashboardTable} from '../../mock'

import { ArrowUpOutlined } from '@ant-design/icons';

import { DashboardLayout } from '../../layout';
import RecentTable from '../../components/RecentTable';
import CardList from './CardList';
import PreviewList from '../../components/PreviewList';

const cardsData = [
  {title: 'Invoice', tagColor: 'cyan', prefix: 'This month', tagContent: '34 000 $' },
  {title: 'Quote', tagColor: 'purple', prefix: 'This month', tagContent: '34 000 $' },
  {title: 'Payment', tagColor: 'green', prefix: 'This month', tagContent: '34 000 $' },
  {title: 'Due Balance', tagColor: 'red', prefix: 'Not Paid', tagContent: '34 000 $' },
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
          lg={{ span: 18 }}
        >
          <div className="whiteBox shadow" style={{ minHeight: '380px' }}>
            <Row className="pad10" gutter={[0, 0]}>
              <PreviewList entity='states' />
            </Row>
          </div>
        </Col>

        <Col
          className="gutter-row"
          xs={{ span: 0 }}
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
          lg={{ span: 12 }}
        >
          <div className="whiteBox shadow">
            <RecentTable entity={'invoice'} title='Recent Invoices' dataTableColumns={dashboardTable} />
          </div>
        </Col>

        <Col
          className="gutter-row"
          xs={{ span: 24 }}
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
