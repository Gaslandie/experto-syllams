import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/PageTitle";
import About from "../section/Home3/About";
import Services from "../section/Home3/Services";
import Growth from "../section/AboutUs/Growth";
import Funfact from "../section/Home4/Funfact";
import Process from "../section/Home4/Process";
import Teams from "../section/Home3/Teams";
import Testimonials from "../section/Home2/Testimonials";
import Contact from "../section/AboutUs/Contact";
import News from "../section/Home2/News";

function AboutUs() {

    return (
        <>

        <div className="page-wrapper">
            <Layout FooterStyle="two">
                <PageTitle pageName="About Us" />
                <About/>
                <Services/>
                <Growth/>
                <Funfact/>
                <Process/>
                <Teams/>
                <Testimonials/>
                <Contact/>
                <News/>
            </Layout>
        </div>

        </>
    )
}
export default AboutUs