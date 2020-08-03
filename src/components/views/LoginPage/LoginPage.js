import React from 'react'
import { Row, Form, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import { actionCreators } from '../../../store'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

function LoginPage(props) {

    const onFinish = values => {
      console.log('Success:', values);
      fetch('/api/login', {
        method: 'post',
        body: JSON.stringify(values)
      }).then( res => res.json())
      .then(res=>{
          if(res.success){
            props.loginUser(res.user)
            props.history.push('/')
          } else {
            alert('로그인 실패.')
          }
      }).catch( e=>{
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
        <div>
    <Row {...rowLayout}>
      <h1>로그인</h1>
    </Row>
    <Row {...rowLayout}>
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
          rules={[{ required: true, message: 'Email을 정확히 입력해주세요.', type:'email'}]}
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

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
        </Button>
        </Form.Item>
      </Form>
    </Row>
    </div>
    )
}

function mapStateToProps(state, ownProps) {
  return {state, ownProps}
}

function mapDispatchToProps(dispatch){
  return {
    loginUser: (user) => dispatch(actionCreators.loginUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (LoginPage)
