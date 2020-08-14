import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchService } from '../../../store/service'

function ServiceCreatePage() {

    const dispatch = useDispatch()

    useEffect(() => {
        
        dispatch(fetchService())
        .then(res => {
            console.log(res)
        })

        return () => {}
    }, [])

    return (
        <div>
            ServiceCreatePage
        </div>
    )
}

export default ServiceCreatePage
