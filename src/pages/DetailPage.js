import React, { Component } from 'react'
//parts
import Header from 'parts/Header'
import Footer from 'parts/Footer'
import DetailPageTitle from 'parts/DetailPageTitle'
import FeaturedImage from 'parts/FeaturedImage'
import BookingForm from 'parts/BookingForm'
import DetailPageDescription from 'parts/DetailPageDescription'
import Categories from 'parts/Categories'
import Testimonial from 'parts/Testimonial'
//json
import itemDetails from '../json/itemDetails.json'
export default class DetailPage extends Component {
    
    render() {
        const breadcrumb = [
            {
                pageTitle : "Home", pageHref: ""
            },
            {
                pageTitle : "House Details", pageHref: ""
            }
        ];
        return (
            <>
                <Header {...this.props} />
                <DetailPageTitle data={itemDetails} breadcrumb={breadcrumb} />
                <FeaturedImage data={itemDetails.imageUrls} />
                <section className="container">
                <div className="row align-items-center mt-5">
                    <div className="col-7">
                        <DetailPageDescription data={itemDetails} />
                    </div>
                    <div className="col-5">
                        <BookingForm itemDetails={itemDetails} />
                    </div>
                </div>
                </section>
                <Categories data={itemDetails.categories} />
                <Testimonial data={itemDetails.testimonial} />
                <Footer />
            </>
        )
    }
}

