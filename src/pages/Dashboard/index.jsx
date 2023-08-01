import React from 'react';
import {  Divider, Row, Col } from 'antd';
import TopCard from './TopCard';
import PreviewState from './PreviewState';

import {  Statistic, Progress } from 'antd';
import {dashboardTable} from '../../mock'

import { ArrowUpOutlined } from '@ant-design/icons';

import { DashboardLayout } from '../../layout';
import RecentTable from '../../components/RecentTable';

export default function Dashboard() {

  return (
    <DashboardLayout>
      <Row gutter={[24, 24]}>
        <TopCard
          title={'Invoice'}
          tagColor={'cyan'}
          prefix={'This month'}
          tagContent={'34 000 $'}
        />
        <TopCard
          title={'Quote'}
          tagColor={'purple'}
          prefix={'This month'}
          tagContent={'34 000 $'}
        />
        <TopCard
          title={'Payment'}
          tagColor={'green'}
          prefix={'This month'}
          tagContent={'34 000 $'}
        />
        <TopCard
          title={'Due Balance'}
          tagColor={'red'}
          prefix={'Not Paid'}
          tagContent={'34 000 $'}
        />
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
              <Col
                className="gutter-row"
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 8 }}
                lg={{ span: 8 }}
              >
                <div className="pad15">
                  <h3
                    style={{
                      color: '#22075e',
                      marginBottom: 15,
                    }}
                  >
                    Invoice Preview
                  </h3>
                  <PreviewState tag={'Draft'} color={'grey'} value={3} />
                  <PreviewState tag={'Pending'} color={'bleu'} value={5} />
                  <PreviewState tag={'Not Paid'} color={'orange'} value={12} />
                  <PreviewState tag={'Overdue'} color={'red'} value={6} />
                  <PreviewState tag={'Partially Paid'} color={'cyan'} value={8} />
                  <PreviewState tag={'Paid'} color={'green'} value={55} />
                </div>
              </Col>
              <Col
                className="gutter-row"
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 8 }}
                lg={{ span: 8 }}
              >
                {' '}
                <div className="pad15">
                  <h3
                    style={{
                      color: '#22075e',
                      marginBottom: 15,
                    }}
                  >
                    Quote Preview
                  </h3>
                  <PreviewState tag={'Draft'} color={'grey'} value={3} />
                  <PreviewState tag={'Pending'} color={'bleu'} value={5} />
                  <PreviewState tag={'Not Paid'} color={'orange'} value={12} />
                  <PreviewState tag={'Overdue'} color={'red'} value={6} />
                  <PreviewState tag={'Partially Paid'} color={'cyan'} value={8} />
                  <PreviewState tag={'Paid'} color={'green'} value={55} />
                </div>
              </Col>
              <Col
                className="gutter-row"
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 8 }}
                lg={{ span: 8 }}
              >
                {' '}
                <div className="pad15">
                  <h3
                    style={{
                      color: '#22075e',
                      marginBottom: 15,
                    }}
                  >
                    Offer Preview
                  </h3>
                  <PreviewState tag={'Draft'} color={'grey'} value={3} />
                  <PreviewState tag={'Pending'} color={'bleu'} value={5} />
                  <PreviewState tag={'Not Paid'} color={'orange'} value={12} />
                  <PreviewState tag={'Overdue'} color={'red'} value={6} />
                  <PreviewState tag={'Partially Paid'} color={'cyan'} value={8} />
                  <PreviewState tag={'Paid'} color={'green'} value={55} />
                </div>
              </Col>
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
            <div className="pad20">
              <h3 style={{ color: '#22075e', marginBottom: 5 }}>Recent Invoices</h3>
            </div>

            <RecentTable entity={'invoice'} dataTableColumns={dashboardTable} />
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
            <div className="pad20">
              <h3 style={{ color: '#22075e', marginBottom: 5 }}>Recent Quotes</h3>
            </div>
            <RecentTable entity={'quote'} dataTableColumns={dashboardTable} />
          </div>
        </Col>
      </Row>
    </DashboardLayout>
  );
}
