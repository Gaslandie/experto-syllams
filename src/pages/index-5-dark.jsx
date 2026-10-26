import React from "react";
import Layout from '../layouts/Layout';
import Banner from "../section/Home5/Banner";
import Client from "../section/Home5/Client";
import About from "../section/Home5/About";
import HzAccordion from "../section/Home5/HzAccordion";
import Choose from "../section/Home1/Choose";
import Growth from "../section/Home5/Growth";
import Case from "../section/Home1/Case";
import Processing from "../section/Home1/Processing";
import Faqs from "../section/Home1/Faqs";
import Team from "../section/Home5/Team";
import Strategy from "../section/Home5/Strategy";
import Testimonials from "../section/Home5/Testimonials";
import Contact from "../section/Home5/Contact";
import News from "../section/Home1/News";

function Home5Dark() {
    return (
        <>

        <div className="page-wrapper">
            <Layout HeaderStyle="five" styleMode="Dark">
                <Banner />
                <Client />
                <About />
                <HzAccordion />
                <Choose />
                <Growth />
                <Case />
                <Processing />
                <Faqs />
                <Team />
                <Strategy />
                <Testimonials />
                <Contact />
                <News className="pt-120"/>
            </Layout>
        </div>
        
        </>
    );
}
export default Home5Dark