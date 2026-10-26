import React from "react";
import Layout from '../layouts/Layout';
import Banner from "../section/Home4/Banner";
import BannerHero from "../section/Home4/BannerHero";
import Brand from "../section/Home4/Brand";
import About from "../section/Home4/About";
import Service from "../section/Home4/Service";
import ChooseUs from "../section/Home4/ChooseUs";
import Funfact from "../section/Home4/Funfact";
import Process from "../section/Home4/Process";
import Pricing from "../section/Home4/PricingDark";
import Testimonials from "../section/Home4/Testimonials";
import News from "../section/Home4/News";
import Contact from "../section/Home4/Contact";

function Home4Dark() {
    return (
        <>

        <div className="page-wrapper">
            <Layout HeaderStyle="four" styleMode="Dark" FooterStyle="four">
                <Banner />
                <BannerHero />
                <Brand />
                <About />
                <Service />
                <ChooseUs />
                <Funfact />
                <Process />
                <Pricing />
                <Testimonials />
                <News />
                <Contact />
            </Layout>
        </div>

        </>
    );
}
export default Home4Dark