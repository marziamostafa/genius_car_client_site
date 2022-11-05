import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
                <p className="font-bold text-2xl text-orange-600">Services</p>
                <h2 className="font-bold text-5xl">Our Service Area</h2>
                <p className='text-center text-lg'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10'>

                {

                    services.map(service => <ServiceCard
                        key={service._id} service=
                        {service}                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;