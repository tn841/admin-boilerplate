import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchService, addService, clearService } from '../../../store/service'

function ServiceIndexPage() {

    const dispatch = useDispatch()
    const services = useSelector(state => state.service)

    useEffect(() => {
        dispatch(clearService())
        dispatch(fetchService())
        .then(res => {
            console.log(res)
            
            dispatch(addService(res.payload.data))
            
        })

        return () => {}
    }, [])

    return (
        <div>
            <h1>ServiceIndexPage</h1>
            <ul>
                {services && services.map( service => <li key={service.id}>{JSON.stringify(service)}</li>)}
            </ul>
        </div>

        
    )
}

export default ServiceIndexPage
