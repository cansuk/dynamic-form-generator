import React, { useEffect, useState } from 'react'
import getData from '../api/Service'

const Form = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData().then(result => {
            debugger;
            console.debug(result);
        })

    }, [])
    return (
        <div>Form</div>
    )
}

export default Form;