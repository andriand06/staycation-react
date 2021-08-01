import React from 'react'
import BreadCrumb from 'components/BreadCrumb'
export default function DetailPageTitle({data,breadcrumb}) {
    return (
        <section className="container mt-5">
            <div className="row align-items-center">
                <div className="col-3">
                    <BreadCrumb data={breadcrumb}/>
                </div>
                <div className="col-6 text-center">
                    <h4 className="h2">
                        {data.name}
                    </h4>
                    <p className="text-gray-500">
                        {data.city}, {data.country}
                    </p>
                </div>
                <div className="col-3"></div>
            </div>
        </section>
    )
}
