import React from 'react'
import { Row, Form, Input, Button, Checkbox, Divider, Col, message } from 'antd';
import { login, fetchLoginUser } from '../../../store/user'
import { useDispatch } from 'react-redux';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function LoginPage(props) {

  const dispatch = useDispatch()

  const onFinish = values => {
    console.log('form validation:', values);
    
    fetchLoginUser(values)
    .then(res => res.data)
    .then(res => {
      console.log(res)
      if (res.success) {
        dispatch(login(res.user))
        message.success('로그인 되었습니다.');
        props.history.push('/')
      } else {
        message.warn('로그인 실패하였습니다.');
      }
    }).catch(e => {
        message.error('에러가 발생하였습니다.');
        console.log(e)
    })
    
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const rowLayout = {
    justify: "center",
    align: "middle"
  }

  return (
    <div style={{ position: 'relative', top: '20%' }}>

      <Row >
        <Col span={12} offset={6}>
          <h1 {...rowLayout}>로그인</h1>
          <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }} />
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            size='large'
          >
            <Form.Item
              label="UserEmail"
              name="Email"
              rules={[{ required: true, message: 'Email을 정확히 입력해주세요.', type: 'email' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: '비밀번호를 입력해주세요.' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
        </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default LoginPage
