import React from 'react';
import Navbar from './global-components/navbar';
import Banner from './section-components/banner';
import SearchForm from './section-components/search-form';
import Aboutv1 from './section-components/about-v1';
import Counter from './section-components/counter-v1';
import AboutV2 from './section-components/about-v2';
import Featuresv1 from './section-components/features-v1';
import ProSlider from './section-components/product-slider-v1';
import Apartment from './section-components/apartment-v1';
import VideoV1 from './section-components/video-v1';
import Category from './section-components/category-v1';
import Testimonial from './section-components/testimonial-v1';
import BlogSlider from './blog-components/blog-slider-v1';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import VideoV4 from './section-components/video-v4';
import BannerV6 from './section-components/banner-v6';

const Home_V1 = () => {
    return <div>
        <Navbar />
        <BannerV6 />
        {/* <VideoV4 /> */}
        <ProSlider />
        {/* <Banner /> */}
        {/* <SearchForm /> */}
        {/* <Counter /> */}
        {/* <AboutV2 /> */}
        {/* <Apartment /> */}
        {/* <VideoV1 /> */}
        {/* <Category /> */}

        {/* <Featuresv1 customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---"/> */}
        <Aboutv1 />
        <BlogSlider customClass="section-subtitle-2"/>
        {/* <Testimonial /> */}
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Home_V1

