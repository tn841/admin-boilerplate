import React, { useState } from 'react'
import { Route, NavLink, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import {
    UserOutlined,
    LinkOutlined,
} from '@ant-design/icons';

import MainPage from '../MainPage/MainPage'
import BannerIndexPage from '../BannerPage/BannerIndexPage'
import BannerCreatePage from '../BannerPage/BannerCreatePage'
import BannerPreviewPage from '../BannerPage/BannerPreviewPage'
import BannerStaticsPage from '../BannerPage/BannerStaticsPage'
import UserIndexPage from '../UserPage/UserIndexPage'
import UserManagePage from '../UserPage/UserManagePage'
import { useSelector, connect } from 'react-redux';
import { useEffect } from 'react';
import { actionCreators } from '../../../store';

const { Sider, Header, Content } = Layout;
const { SubMenu } = Menu;

function DefaultLayout(props) {
    const user = useSelector(state => state?.user)
    const [currentTime, setcurrentTime] = useState('')

    

    useEffect(() => {
        console.log(user);
        if(!user) {
            props.history.push('/login')
        }       
        return () => {
            
        }
    }, [])

    const handleOnClick = () => {
        props.logoutUser()
        props.history.push('/login')

    }

    return (
        <>
        <Sider style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
        }}>
            <div className="logo">
                <Link to="/" >DAMS</Link>
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
                <span>{user?.name}님 안녕하세요.</span>
                <Link to="/login" style={{ position:"absolute", right:"15px"}}>Login</Link>
                <Button onClick={handleOnClick}>Logout</Button>
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

                <Route exact path="/user" component={UserIndexPage} />
                <Route exact path="/user/manage" component={UserManagePage} />

                {/* <Route exact path="/login" component={'<h1>login</h1>'} /> */}
                {/* <Route exact path="/login" component={Auth(LoginPage, false)} />
              <Route exact path="/register" component={Auth(RegisterPage, false)} />
              <Route exact path="/movie/:movieId" component={Auth(MovieDetail, null)} />
              <Route exact path="/favorite/" component={Auth(FavoritePage, null)} /> */}
            </Content>
        </Layout>
        </>
    )
}

function mapStatusToProps(state, ownProps) {
    return {state, ownProps}
}

function mapDispatchToProps(dispatch) {
    return {
        logoutUser: () => dispatch(actionCreators.logoutUser())
    }
}

export default connect(mapStatusToProps, mapDispatchToProps) (DefaultLayout)
