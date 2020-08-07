import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser, login } from '../store/user';

export default function(SpectificComponent, option, adminRoute = null) {
    /*
        * option?
        null : 아무나 접근 가능한 페이지
        true : 로그인한 유저만 접근 가능
        false : 로그인한 유저는 접근 불가능
    */
    function AuthenticationCheck(props){
        const dispatch = useDispatch();

        useEffect(() => { 
            dispatch(fetchUser())
            console.log('here')
        }, [])

        return (
            <SpectificComponent/>
        )
    }

    return AuthenticationCheck
}