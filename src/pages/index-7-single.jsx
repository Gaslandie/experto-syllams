import React from "react";
import Layout from '../layouts/Layout';
import Banner from "../section/Home7/Banner";
import About from "../section/Home7/About";
import Service from "../section/Home7/Service";
import Choose from "../section/Home7/Choose";
import Brand from "../section/Home7/Brand";
import Case from "../section/Home1/Case";
import Faqs from "../section/Home2/Faqs";
import Growth from "../section/Home7/Growth";
import Steps from "../section/Home7/Steps";
import Team from "../section/Home7/Team";
import Testimonials from "../section/Home7/Testimonials";
import News from "../section/Home1/News";
import Contact from "../section/Home4/Contact";

function Home7Single() {
    return (
        <>
        <div className="page-wrapper gray-bg">
            <Layout HeaderStyle="sevensingle" FooterStyle="six">
                <Banner />               
                <About />               
                <Service />               
                <Choose />               
                <Brand />               
                <Case className="white-bg"/>               
                <Faqs className="mt-120 pb-0"/>               
                <Growth />               
                <Steps />               
                <Team />               
                <Testimonials />               
                <News />
                <Contact />
            </Layout>
        </div>
        </>
    );
}
export default Home7Single