import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from "react-router-dom";

import { Layout, Menu, Breadcrumb } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    HomeOutlined,
    LinkOutlined,
} from '@ant-design/icons';

import MainPage from '../views/MainPage/MainPage'
import BannerIndexPage from '../views/BannerPage/BannerIndexPage'
import BannerCreatePage from '../views/BannerPage/BannerCreatePage'
import BannerPreviewPage from '../views/BannerPage/BannerPreviewPage'
import BannerStaticsPage from '../views/BannerPage/BannerStaticsPage'
import UserIndexPage from '../views/UserPage/UserIndexPage'
import UserManagePage from '../views/UserPage/UserManagePage'

import LoginPage from '../views/LoginPage/LoginPage'


const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;


function Routes() {

    const [collapsed, setcollapsed] = useState(false)
    const [currentTime, setcurrentTime] = useState('')

    useEffect(() => {

        return () => { }
    }, [])



    return (
        <Router>

            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed} style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                }}>
                    <div className="logo">
                        <NavLink to="/">DAMS</NavLink>
                    </div>
                    <Menu theme="dark" mode="inline"
                        defaultSelectedKeys={['']}
                        defaultOpenKeys={['banner', 'user']}
                    >
                        <SubMenu key="banner" icon={<LinkOutlined />} title="배너관리">
                            <Menu.Item key="banner_index">
                                <NavLink to="/banner" activeClassName="active">배너 현황</NavLink>
                            </Menu.Item>
                            <Menu.Item key="banner_create">
                                <NavLink to="/banner/create" activeClassName="active">배너 추가</NavLink>
                            </Menu.Item>
                            <Menu.Item key="banner_preview">
                                <NavLink to='/banner/preview' activeClassName="active">배너 미리보기</NavLink>
                            </Menu.Item>
                            <Menu.Item key="banner_statistics">
                                <NavLink to='/banner/statistics' activeClassName="active">배너 통계</NavLink>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="user" icon={<UserOutlined />} title="사용자관리">
                            <Menu.Item key="user_index">
                                <NavLink to='/user' activeClassName="active">사용자 현황</NavLink>
                            </Menu.Item>
                            <Menu.Item key="user_manage">
                                <NavLink to='/user/manage' activeClassName="active">사용자 관리</NavLink>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout className="site-layout" style={{ marginLeft: 200, minHeight: "1200px" }}>
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {currentTime !== 0 && currentTime}
                        <Redirect to='/login' >로그인</Redirect>

                    </Header>
                    <Breadcrumb style={{ margin: '20px 20px 0px' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24
                        }}
                    >
                        <Switch>
                            <Route exact path="/" component={MainPage} />
                            <Route exact path="/banner" component={BannerIndexPage} />
                            <Route exact path="/banner/create" component={BannerCreatePage} />
                            <Route exact path="/banner/preview" component={BannerPreviewPage} />
                            <Route exact path="/banner/statistics" component={BannerStaticsPage} />

                            <Route exact path="/user" component={UserIndexPage} />

                            {/* <Route exact path="/login" component={'<h1>login</h1>'} /> */}
                            {/* <Route exact path="/login" component={Auth(LoginPage, false)} />
              <Route exact path="/register" component={Auth(RegisterPage, false)} />
              <Route exact path="/movie/:movieId" component={Auth(MovieDetail, null)} />
              <Route exact path="/favorite/" component={Auth(FavoritePage, null)} /> */}
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
            <Route exact path="/user/manage" component={UserManagePage} />
            <Route exact path="/login" component={LoginPage} />

        </Router>
    )
}

export default Routes


