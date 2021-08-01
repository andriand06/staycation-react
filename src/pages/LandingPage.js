import React, { Component } from 'react'
//parts
import Header from 'parts/Header'
import Hero from 'parts/Hero'
import MostPicked from 'parts/MostPicked'
import Categories from 'parts/Categories'
import Testimonial from 'parts/Testimonial'
import Footer from 'parts/Footer'
//json
import landingPage from 'json/landingPage'
export default class LandingPage extends Component {
    constructor(props) {
        super(props);
       this.refMostPicked = React.createRef();
    }

    componentDidMount(){
        window.title = "Staycation | Home";
        window.scrollTo(0,0);
    }


    render() {
        return (
            <>
            <Header {...this.props} />
            <Hero refMostPicked={this.refMostPicked} data={landingPage.hero}/>
            <MostPicked refMostPicked={this.refMostPicked} data={landingPage.mostPicked}/>
            <Categories data={landingPage.categories}></Categories>
            <Testimonial data={landingPage.testimonial}></Testimonial>
            <Footer />
            </>
        )
    }
}