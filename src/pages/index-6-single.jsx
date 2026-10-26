import React from "react";
import Layout from '../layouts/Layout';
import Banner from "../section/Home6/Banner";
import About from "../section/Home6/About";
import Service from "../section/Home6/Service";
import Consult from "../section/Home6/Consult";
import Features from "../section/Home6/Features";
import Professional from "../section/Home6/Professional";
import Pricing from "../section/Home6/Pricing";
import Teams from "../section/Home6/Teams";
import Testimonials from "../section/Home6/Testimonials";
import News from "../section/Home6/News";
import Contact from "../section/Home4/Contact";

function Home6Single() {
    return (
        <>
        
        <div className="page-wrapper">
            <Layout HeaderStyle="sixsingle" FooterStyle="five">
                <Banner />
                <About />
                <Service />
                <Consult />
                <Features />
                <Professional />
                <Pricing />
                <Teams />
                <Testimonials />
                <News />
                <Contact />
            </Layout>
        </div>

        </>
    );
}
export default Home6Single