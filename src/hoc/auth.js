import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, login } from '../store/user';
import Axios from 'axios';
import { message } from 'antd';
import { withRouter } from 'react-router-dom';

export default function(SpectificComponent, option, adminRoute = null) {
    /*
        * option?
        null : 아무나 접근 가능한 페이지
        true : 로그인한 유저만 접근 가능
        false : 로그인한 유저는 접근 불가능
    */
    function AuthenticationCheck(props){        
        const dispatch = useDispatch();
        const state = useSelector(state => state)
        const isLogin = useSelector(state => state.user?.isLogin)

        const fetchAuthInfo = async () => {
            try {
                await Axios.get('/api/auth')
                .then(res => res.data)
                .then(res => {
                    console.log(res)
                    if(!res.isLogin && option){
                        message.warning('먼저 로그인 해주세요.');
                        props.history.push('/login')        
                    } else {
                        if(!option && res.isLogin){
                            
                            message.warning('이미 로그인 되어 있습니다.');
                            props.history.push('/')
                        } 
                        dispatch(login(res.user))
                        console.log('정상')
                    }
                })
            } catch (e) {
                message.warning('먼저 로그인 해주세요.');
                props.history.push('/login')
            }
            
        }
        

        useEffect(() => { 
            fetchAuthInfo()
        }, [])

        return (<SpectificComponent/>)
            
        
    }

    return AuthenticationCheck
}