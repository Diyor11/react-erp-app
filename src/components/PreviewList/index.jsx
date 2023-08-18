import React from 'react'
import { request } from '../../request'
import useFetch from '../../hooks/useFetch'
import PreViewbox from './PreViewbox'
import { Col } from 'antd'

export default function PreviewList() {

  const asyncList = () => {
    return request.list({entity: 'states'})
  }

  const {result} = useFetch(asyncList)

  return (
    <>
      {result?.map((data, index) => (
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
    </>
  )
}
