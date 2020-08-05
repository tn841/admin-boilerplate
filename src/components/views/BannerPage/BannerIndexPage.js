import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {getBanner} from '../../../store/banner'

function BannerIndexPage() {
    
    const dispatch = useDispatch();

    useEffect(() => {
      console.log(getBanner())
      dispatch(getBanner())
      

      return () => {
            
      }
    }, [])

    return (
        <div>
            <h1>배너현황</h1>
            <hr/>
            
    

        </div>
    )
}

export default BannerIndexPage

