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
    TimePicker 
  } from 'antd';
  import PageTitle from '../Commons/PageTitle'
  import ImgUpload from '../Commons/ImgUpload'
  import moment from 'moment';

function BannerCreatePage() {

    const [componentSize, setComponentSize] = useState('large');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    const format = 'HH:mm';

    return (
        <div>
             <PageTitle title='배너 추가'/>

            <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="게시 대상 서비스 선택">
          <Cascader
            options={[
              {
                value: 'payment',
                label: '결제창',
                children: [
                  {
                    value: 'teledit',
                    label: '휴대폰',
                    children: [
                      {
                        value: 'PC',
                        label: 'PC',
                      },
                      {
                        value: 'Mobile',
                        label: 'Mobile',
                      },
                    ],
                  },
                  {
                    value: 'danalpaycard',
                    label: '다날페이카드',
                    children: [
                      {
                        value: 'PC',
                        label: 'PC',
                      },
                      {
                        value: 'Mobile',
                        label: 'Mobile',
                      },
                    ],
                  },
                  {
                    value: 'uas',
                    label: '본인확인',
                    children: [
                      {
                        value: 'PC',
                        label: 'PC',
                      },
                      {
                        value: 'Mobile',
                        label: 'Mboile',
                      },
                    ],
                  },
                ],
              },
              {
                value: 'homepage',
                label: '홈페이지',
                children: [
                  {
                    value: 'danalpay.com',
                    label: 'danalpay.com',
                  },
                  {
                    value: 'danal.co.kr',
                    label: 'danal.co.kr',
                  },
                ],
              },
              {
                value: 'backoffice',
                label: 'backoffice',
                children: [
                  {
                    value: 'partner.danalpay.com',
                    label: 'partner.danalpay.com',
                    children: [
                      {
                        value: 'PC',
                        label: 'PC',
                      },
                      {
                        value: 'Mobile',
                        label: 'Mboile',
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="배너 ID">
          <Input />
        </Form.Item>
        <Form.Item label="이미지">
          <ImgUpload />
        </Form.Item>
        <Form.Item label="이미지 설명">
          <Input />
        </Form.Item>
        <Form.Item label="URL">
          <Input />
        </Form.Item>
        <Form.Item label="게시 시작일">
          <DatePicker defaultValue={moment()}/>
          <TimePicker defaultValue={moment('00:00', format)} format={format}/>
        </Form.Item>
        <Form.Item label="게시 종료일">
        <DatePicker defaultValue={moment()}/>
          <TimePicker defaultValue={moment('23:59', format)} format={format}/>
        </Form.Item>
        <Form.Item label="활성화 여부">
          <Switch />
        </Form.Item>
        
        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>
        
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
      </Form>
    </>
        </div>
    )
}

export default BannerCreatePage
