import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getBanner, fetchBanner, addBanner, clearBanner} from '../../../store/banner'
import Axios from 'axios';
import { message } from 'antd';

const fetchBannerFunc = async () => {
    const res = await Axios.get('/api/getBanner')
    .then(res => res.data)
    return res
}

function BannerIndexPage() {
    
    const dispatch = useDispatch()
    const banners = useSelector(state => state.banner)

    useEffect(() => {
        console.log('BannerIndexPage')
        dispatch(clearBanner())
        dispatch(fetchBanner()).then( res => {
            console.log(res)
            if( !res.payload.success){
                message.warning('배너 정보 불러오기에 실패하였습니다.')
            } else {
                dispatch(addBanner(res.payload.data))
            }
        })
    
    }, [])

    return (
        <div>
            <h1>배너현황</h1>
            <hr/>
            <ul>
                {banners.map(banner => <li key={banner.id}>{JSON.stringify(banner)}</li>)}
            </ul>
                
            
    

        </div>
    )
}

export default BannerIndexPage

