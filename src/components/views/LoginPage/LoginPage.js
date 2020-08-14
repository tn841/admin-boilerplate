import React from 'react'
import { Row, Form, Input, Button, Checkbox, Divider, Col, message, Spin } from 'antd';
import { login, fetchLoginUser, fetchUser } from '../../../store/user'
import { useDispatch, useSelector } from 'react-redux';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function LoginPage(props) {

  const dispatch = useDispatch()
  
  const loading = useSelector(state => state.loading)
  console.log(loading)

  const onFinish = values => {
    console.log('form validation:', values);

    dispatch(fetchUser(values))
    .then(res => {
      if (res.payload.success) {
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
      <Spin spinning={loading ? true : false} delay={500} />
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
