import React, {Component} from "react";
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
import {withRouter} from 'react-router-dom'

const StyledLayout = ({children}) => (
    <Row type='flex' justify='center' align='middle' style={{marginTop: '35vh'}}>
      <Col span={6}>
        {children}
      </Col>
    </Row>
)

class Login extends Component{

  handleSubmit = e => {
    e.preventDefault();
    console.log(123)
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.history.replace('/situation')
      }
    })
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return(
      <StyledLayout>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {
              getFieldDecorator('username', {
                rules: [{required: true, message: 'Please input your username!'}],
              })(
                  <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="请输入用户名"
                  />
              )
            }
          </Form.Item>
          <Form.Item>
            {
              getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                  <Input
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="password"
                      placeholder="请输入密码"
                  />,
              )
            }
          </Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
            登录
          </Button>
        </Form>
      </StyledLayout>
    )
  }
}


export default withRouter(Form.create()(Login))