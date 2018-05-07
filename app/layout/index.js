import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';
const {
    Header,
    Sider,
    Content
} = Layout;

export default class PrimaryLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        }
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        return(
            <Layout>
                <Sider
                  trigger={null}
                  collapsible
                  collapsed={this.state.collapsed}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['/']}>
                        <Menu.Item key="/">
                            <Link to="/"><Icon type="user" />首页</Link>
                        </Menu.Item>
                        <Menu.Item key="/about">
                            <Link to="/about"><Icon type="video-camera" />关于</Link>
                        </Menu.Item>
                        <Menu.Item key="/info">
                            <Link to="/info"><Icon type="upload" />个人信息</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                          className="trigger"
                          type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                          onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        {this.props.children}
                        {console.log(this.props)}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
PrimaryLayout.propTypes = {
    children: PropTypes.node,
}
