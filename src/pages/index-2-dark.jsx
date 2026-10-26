import React from "react";
import Layout from '../layouts/Layout';
import Banner from "../section/Home2/Banner";
import Brand from "../section/Home2/Brand";
import About from "../section/Home2/About";
import Funfact from "../section/Home2/Funfact";
import Services from "../section/Home2/Services";
import Testimonials from "../section/Home2/Testimonials";
import Steps from "../section/Home2/Steps";
import Growth2 from "../section/Home2/Growth2";
import Faqs from "../section/Home2/Faqs";
import Gallery from "../section/Home2/Gallery";
import Features from "../section/Home2/Features";
import Strategy2 from "../section/Home2/Strategy2";
import Team from "../section/Home2/Team";
import Contact from "../section/Home2/Contact";
import News from "../section/Home2/News";

function Home2Dark() {
    return (
        <>

        <div className="page-wrapper">
            <Layout HeaderStyle="two" styleMode="Dark" FooterStyle="two">
                <Banner />
                <Brand />
                <About />
                <Funfact />
                <Services />
                <Testimonials />
                <Steps />
                <Growth2 />
                <Faqs />
                <Gallery />
                <Features />
                <Strategy2 />
                <Team />
                <Contact />
                <News />
            </Layout>
        </div>

        </>
    );
}
export default Home2Dark