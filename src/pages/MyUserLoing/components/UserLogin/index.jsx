import React, { useState, useRef } from 'react';
import { Input, Button, Checkbox, Grid, Message, Icon } from '@alifd/next';
import { createBrowserHistory } from 'history';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import './index.scss';

// 页面跳转
const history = createBrowserHistory({ 
  // 跳转后是否刷新
  forceRefresh: true
});
const { Row, Col } = Grid;

// 寻找背景图片可以从 https://unsplash.com/ 寻找
const backgroundImage = require('./images/TB1zsNhXTtYBeNjy1XdXXXXyVXa-2252-1500.png');

export default function UserLogin() {
  const formRef = useRef(null);
  const [value, setValue] = useState({
    account: undefined,
    password: undefined,
    checkbox: false,
  });

  const formChange = (value) => {
    setValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formRef.current.validateAll((errors, values) => {
      if (errors) {
        console.log('errors', errors);
        return;
      }
      console.log('values:', values);
      Message.success('登录成功');
      // 登录成功后可通过 hashHistory.push('/') 跳转首页
      history.push('/');
    });
  };

  
  

  return (
    <div style={styles.userLogin} className="user-login">
      <div
        style={{
          ...styles.userLoginBg,
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
      <div style={styles.contentWrapper} className="content-wrapper">
        <h2 style={styles.slogan} className="slogan">
          欢迎使用 <br /> 信息管理系统
        </h2>
        <div style={styles.formContainer}>
          <h4 style={styles.formTitle}>登录</h4>
          <IceFormBinderWrapper
            value={value}
            onChange={formChange}
            ref={formRef}
          >
            <div style={styles.formItems}>
              <Row style={styles.formItem}>
                <Col>
                  <Icon
                    type="account"
                    size="small"
                    style={styles.inputIcon}
                  />
                  <IceFormBinder name="account" required message="必填">
                    <Input maxLength={20} placeholder="会员名/邮箱/手机号" />
                  </IceFormBinder>
                </Col>
                <Col>
                  <IceFormError name="account" />
                </Col>
              </Row>

              <Row style={styles.formItem}>

                <Col>
                 <Icon
                    type="ellipsis"
                    test="lock"
                    size="small"
                    style={styles.inputIcon}
                  />
                  <IceFormBinder name="password" required message="必填">
                    <Input htmlType="password" placeholder="密码" />
                  </IceFormBinder>
                </Col>
                <Col>
                  <IceFormError name="password" />
                </Col>
              </Row>

              <Row style={styles.formItem}>
                <Col>
                  <IceFormBinder name="checkbox">
                    <Checkbox style={styles.checkbox}>记住账号</Checkbox>
                  </IceFormBinder>
                </Col>
              </Row>

              <Row style={styles.formItem}>
                <Button
                  type="primary"
                  onClick={handleSubmit}
                  style={styles.submitBtn}
                >
                  登 录
                </Button>
              </Row>

              <Row className="tips" style={styles.tips}>
                <a href="/" style={styles.link}>
                  管理员登录：admin/admin
                </a>
              </Row>
            </div>
          </IceFormBinderWrapper>
        </div>
      </div>
    </div>
  );
}

const styles = {
  userLogin: {
    position: 'relative',
    height: '100vh',
  },
  userLoginBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundSize: 'cover',
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '30px 40px',
    background: '#fff',
    borderRadius: '6px',
    boxShadow: '1px 1px 2px #eee',
  },
  formItem: {
    position: 'relative',
    marginBottom: '25px',
    flexDirection: 'column',
  },
  formTitle: {
    margin: '0 0 20px',
    textAlign: 'center',
    color: '#3080fe',
    letterSpacing: '12px',
  },
  inputIcon: {
    position: 'absolute',
    left: '0px',
    top: '3px',
    color: '#999',
  },
  submitBtn: {
    width: '240px',
    background: '#3080fe',
    borderRadius: '28px',
  },
  checkbox: {
    marginLeft: '5px',
  },
  tips: {
    textAlign: 'center',
  },
  link: {
    color: '#999',
    textDecoration: 'none',
    fontSize: '13px',
  },
  line: {
    color: '#dcd6d6',
    margin: '0 8px',
  },
};
