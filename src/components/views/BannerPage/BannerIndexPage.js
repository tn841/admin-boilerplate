import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';

function BannerIndexPage() {

    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    return (
        <div>
            <h1>배너관리</h1>
            <hr/>
            <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Input">
          <Input />
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="TreeSelect">
          <TreeSelect
            treeData={[
              { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
            ]}
          />
        </Form.Item>
        <Form.Item label="Cascader">
          <Cascader
            options={[
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Switch">
          <Switch />
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
      </Form>
    </>
    <h1>content</h1>
    <h1>content</h1>
    <h1>content</h1>
    <h1>content</h1>
    <h1>content</h1>
    <h1>content</h1>
    <h1>content</h1>
    <h1>content</h1>
    <h1>content</h1>
    <h1>content</h1>
    <h1>content</h1>
    <h1>content</h1>
    <h1>content</h1>
    <h1>content</h1>
    <h1>content</h1>
    <h1>content</h1>
    <h1>content</h1>
    <h1>content</h1>
    <h1>content</h1>
    <h1>content</h1>
    <h1>content</h1>
    <h1>content</h1>
    <h1>content</h1>
    <h1>content</h1>
    <h1>content</h1>
    <h1>content</h1>
    <h1>content</h1>
    <h1>content</h1>

        </div>
    )
}

export default BannerIndexPage

