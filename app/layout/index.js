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
            SelectedKeys: '/',
        }
    }
    componentWillMount() {
        // 切换路由刷新时保证还是对应的导航栏
        this.setState({
            SelectedKeys: window.location.pathname,
        });
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        const { SelectedKeys } = this.state;
        return(
            <Layout>
                <Sider
                  trigger={null}
                  collapsible
                  collapsed={this.state.collapsed}
                >
                    <div className="logo">手动构建项目</div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={[SelectedKeys]}>
                        <Menu.Item key="/">
                            <Icon type="user" />
                            <span><Link to="/">首页</Link></span>
                        </Menu.Item>
                        <Menu.Item key="/about">
                            <Icon type="video-camera" />
                            <span><Link to="/about">关于页</Link></span>
                        </Menu.Item>
                        <Menu.Item key="/info">
                            <Icon type="upload" />
                            <span><Link to="/info">个人信息页</Link></span>
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
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
PrimaryLayout.propTypes = {
    children: PropTypes.node,
}
