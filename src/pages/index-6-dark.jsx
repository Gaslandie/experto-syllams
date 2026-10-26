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

function Home6Dark() {
    return (
        <>

        <div className="page-wrapper">
            <Layout HeaderStyle="two" styleMode="Dark" FooterStyle="five">
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
            </Layout>
        </div>

        </>
    );
}
export default Home6Dark