import React, { useState } from 'react'
import { Route, NavLink, Link, withRouter } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Button, message } from 'antd';
import {
    UserOutlined,
    LinkOutlined,
    CloudServerOutlined,
} from '@ant-design/icons';

import MainPage from '../views/MainPage/MainPage'
import BannerIndexPage from '../views/BannerPage/BannerIndexPage'
import BannerCreatePage from '../views/BannerPage/BannerCreatePage'
import BannerPreviewPage from '../views/BannerPage/BannerPreviewPage'
import BannerStaticsPage from '../views/BannerPage/BannerStaticsPage'
import UserIndexPage from '../views/UserPage/UserIndexPage'
import UserManagePage from '../views/UserPage/UserManagePage'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import {logout, fetchLogoutUser} from '../../store/user'
import ServiceIndexPage from '../views/ServicePage/ServiceIndexPage';
import ServiceCreatePage from '../views/ServicePage/ServiceCreatePage';

const { Sider, Header, Content } = Layout;
const { SubMenu } = Menu;

function DefaultLayout(props) {
    const user = useSelector(state => state?.user)
    const isLogin = useSelector(state => state.user.isLogin)
    const dispatch = useDispatch()
    const [currentTime, setcurrentTime] = useState('')

    const handleOnClick = () => {

        fetchLogoutUser().then(
            res => {
                console.log(res)
                dispatch(logout())
                props.history.push('/login')
                setTimeout(() => {
                    message.success('성공적으로 로그아웃 되었습니다.  ')
                }, 600);    
            }
        )
    }
    
    const floatRight = {
        float:'right',
        margin:'0px 10px'
    }

    return ( 
        <>
        {isLogin && (<>
            <Sider style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
        }}>
            <div className="logo">
                <NavLink to="/" >DAMS</NavLink>
            </div>
            <Menu theme="dark" mode="inline"
                defaultSelectedKeys={['']}
                defaultOpenKeys={['banner', 'user', 'service']}
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
                <SubMenu key="service" icon={<CloudServerOutlined />} title="웹서비스관리">
                    <Menu.Item key="service_index">
                        <NavLink to='/service' activeClassName="active">웹 서비스 현황</NavLink>
                    </Menu.Item>
                    <Menu.Item key="service_create">
                        <NavLink to='/service/create' activeClassName="active">웹 서비스 추가</NavLink>
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
                <a href="#" onClick={handleOnClick} style={{...floatRight}}>Logout</a>
                <span style={{...floatRight}}>{user?.name}님 안녕하세요.</span>
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
                <Route exact path="/" component={MainPage} />
                <Route exact path="/banner" component={BannerIndexPage} />
                <Route exact path="/banner/create" component={BannerCreatePage} />
                <Route exact path="/banner/preview" component={BannerPreviewPage} />
                <Route exact path="/banner/statistics" component={BannerStaticsPage} />

                <Route exact path="/service" component={ServiceIndexPage} />
                <Route exact path="/service/create" component={ServiceCreatePage} />

                <Route exact path="/user" component={UserIndexPage} />
                <Route exact path="/user/manage" component={UserManagePage} />

                {/* <Route exact path="/login" component={'<h1>login</h1>'} /> */}
                {/* <Route exact path="/login" component={Auth(LoginPage, false)} />
              <Route exact path="/register" component={Auth(RegisterPage, false)} />
              <Route exact path="/movie/:movieId" component={Auth(MovieDetail, null)} />
              <Route exact path="/favorite/" component={Auth(FavoritePage, null)} /> */}
            </Content>
        </Layout>
        
        </>)}
        
        </>
    )
}

export default withRouter(DefaultLayout) 
