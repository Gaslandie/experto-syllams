import React from "react";
import Layout from '../layouts/Layout';
import Banner from "../section/Home2/Banner";
import Brand from "../section/Home2/Brand";
import About from "../section/Home2/About";
import Funfact from "../section/Home2/Funfact";
import Services from "../section/Home2/Services";
import Testimonials from "../section/Home2/Testimonials";
import Steps from "../section/Home2/Steps";
import Growth from "../section/Home2/Growth";
import Faqs from "../section/Home2/Faqs";
import Gallery from "../section/Home2/Gallery";
import Features from "../section/Home2/Features";
import Strategy from "../section/Home2/Strategy";
import Team from "../section/Home2/Team";
import Contact from "../section/Home2/Contact";
import News from "../section/Home2/News";

function Home2Single() {
    return (
        <>

        <div className="page-wrapper">
            <Layout HeaderStyle="twosingle">
                <Banner />
                <Brand />
                <About />
                <Funfact />
                <Services />
                <Testimonials />
                <Steps />
                <Growth />
                <Faqs />
                <Gallery />
                <Features />
                <Strategy />
                <Team />
                <Contact />
                <News />
            </Layout>
        </div>

        </>
    );
}
export default Home2Single