import React from 'react';
import { Form, Input } from 'antd';

export default function CustomerForm({ isUpdateForm = false }) {
  return (
    <div className={`${isUpdateForm ? 'update':'create'} panel-form`}>
      <Form.Item
        label="Company Name"
        name="company"
        rules={[
          {
            required: true,
            message: 'Please input your company name!',
          },
        ]}
        className='panel-form__item company'
      >
        <Input className='company panel-form' />
      </Form.Item>
      <Form.Item
        label="Sure Name"
        name="managerSurname"
        rules={[
          {
            required: true,
            message: 'Please input your surname!',
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50%)',
          paddingRight: '5px',
        }}
        className='panel-form__item surename'
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Name"
        name="managerName"
        rules={[
          {
            required: true,
            message: 'Please input your manager name!',
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50%)',
          paddingLeft: '5px',
        }}
        className='panel-form__item name'
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone"
        rules={[
          {
            required: true,
            message: 'Please input your phone!',
          },
        ]}
        className='panel-form__item phone'
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
        className='panel-form__item email'
      >
        <Input />
      </Form.Item>
    </div>
  );
}
